/* ==========================================================================
   Galbadrakh STEM — auth.js
   Login system for static (GitHub Pages) hosting.

   What this provides:
   - Strict school-email format: ##_#_firstname.lastnameinitial@mongolaspiration.edu.mn
     (2 digits = graduation year, 1 letter = class a-d, then first name, dot,
     surname initial). The username is derived automatically: 28c_galbadrakh.u
     -> "Galbadrakh.U".
   - Allowlist of accounts that may sign in (owner and future students).
   - Strong password checking: PBKDF2-HMAC-SHA256, 310 000 iterations, per-user
     random salt. The plaintext password is NEVER stored — only the hash.
   - Rate limiting: 5 failed attempts lock the form for 15 minutes.
   - Persistent signed session (localStorage, 365 days) so the owner does not
     have to type the password again. "Log out" ends it immediately.
   - Login notification: audit log + optional notifyEndpoint (see
     docs/login-email-automation.md for a free Google Apps Script endpoint that
     emails the owner "I am joined and the username is ..." on every login).

   Honest limitation: this is client-side protection on a public static host.
   It stops casual visitors and search engines; it cannot stop someone who
   reads the HTML source. For real server-side privacy, see the docs note on
   GitHub Enterprise private Pages / Cloudflare Access.
   ========================================================================== */
(function () {
  'use strict';

  /* ----------------------------- configuration ---------------------------- */

  var AUTH = {
    // Only these accounts may sign in. Format is validated first; then this
    // allowlist decides who actually gets access.
    accounts: [
      {
        email: '28c_galbadrakh.u@mongolaspiration.edu.mn',
        username: 'Galbadrakh.U',
        role: 'owner',
        pbkdf2: {
          salt: '5cf46b8cdb1ee5f90b5e24cd6dfc8674',
          hash: 'd993657ebe81cd34b539241f175ef54c05b312c52e2d2279e179ae5935d458f4',
          iterations: 310000
        }
      },
      {
        email: 'galbadrakh9998@gmail.com',
        username: 'Galbadrakh.U',
        role: 'owner',
        pbkdf2: {
          salt: '5cf46b8cdb1ee5f90b5e24cd6dfc8674',
          hash: 'd993657ebe81cd34b539241f175ef54c05b312c52e2d2279e179ae5935d458f4',
          iterations: 310000
        }
      }
    ],

    // Session signing key (HMAC-SHA256). On a static host every visitor can
    // read this file, so it deters tampering but is not a server secret.
    secret: '2e2238b358996e8577587ea8649a80ff344caba948be3460eaa9fccb58c969ba',

    sessionTtlMs: 365 * 24 * 60 * 60 * 1000, // owner stays signed in for a year
    sessionKey: 'gs_auth_session_v1',
    auditKey: 'gs_auth_log_v1',
    rateKey: 'gs_auth_rl_v1',

    maxFails: 5,
    failWindowMs: 15 * 60 * 1000,
    lockMs: 15 * 60 * 1000,

    // Optional email/notification endpoint. Leave '' to disable. When set,
    // every successful login POSTs JSON to it so the owner is emailed
    // automatically. See docs/login-email-automation.md (Google Apps Script).
    notifyEndpoint: ''
  };

  /* ------------------------------ utilities ------------------------------- */

  var SCHOOL_RE = /^(\d{2})([a-d])_([a-z][a-z-]*)\.([a-z])@mongolaspiration\.edu\.mn$/i;
  var GMAIL_RE = /^[a-z0-9._%+-]+@gmail\.com$/i;

  function normEmail(s) { return String(s || '').trim().toLowerCase(); }

  function isSchoolEmail(s) { return SCHOOL_RE.test(normEmail(s)); }

  // 28c_galbadrakh.u@mongolaspiration.edu.mn -> "Galbadrakh.U"
  function deriveUsername(email) {
    var m = SCHOOL_RE.exec(normEmail(email));
    if (!m) return null;
    var first = m[3].toLowerCase();
    first = first.charAt(0).toUpperCase() + first.slice(1);
    return first + '.' + m[4].toUpperCase();
  }

  function findAccount(email) {
    var e = normEmail(email);
    for (var i = 0; i < AUTH.accounts.length; i++) {
      if (AUTH.accounts[i].email === e) return AUTH.accounts[i];
    }
    return null;
  }

  function bytesToHex(buf) {
    return Array.from(new Uint8Array(buf)).map(function (b) {
      return b.toString(16).padStart(2, '0');
    }).join('');
  }

  function hexToBytes(hex) {
    var out = new Uint8Array(hex.length / 2);
    for (var i = 0; i < out.length; i++) out[i] = parseInt(hex.substr(i * 2, 2), 16);
    return out;
  }

  function utf8(s) { return new TextEncoder().encode(s); }

  function b64url(bytes) {
    var bin = '';
    var arr = typeof bytes === 'string' ? utf8(bytes) : new Uint8Array(bytes);
    for (var i = 0; i < arr.length; i++) bin += String.fromCharCode(arr[i]);
    return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }

  function b64urlDecode(s) {
    var b64 = s.replace(/-/g, '+').replace(/_/g, '/');
    while (b64.length % 4) b64 += '=';
    var bin = atob(b64);
    var out = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }

  function hexToB64url(hex) { return b64url(hexToBytes(hex)); }

  /* ------------------------- password + signatures ------------------------ */

  function pbkdf2Hex(password, saltHex, iterations) {
    return crypto.subtle.importKey('raw', utf8(password), { name: 'PBKDF2' }, false, ['deriveBits'])
      .then(function (key) {
        return crypto.subtle.deriveBits(
          { name: 'PBKDF2', salt: hexToBytes(saltHex), iterations: iterations, hash: 'SHA-256' },
          key,
          256
        );
      })
      .then(bytesToHex);
  }

  function hmacSign(message) {
    return crypto.subtle.importKey(
      'raw', utf8(AUTH.secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
    ).then(function (key) {
      return crypto.subtle.sign('HMAC', key, utf8(message));
    }).then(function (sig) { return b64url(sig); });
  }

  function timingSafeEqual(a, b) {
    if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
    var diff = 0;
    for (var i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
    return diff === 0;
  }

  /* ------------------------------- sessions ------------------------------- */
  /* Token: "v1.<b64url(payload)>.<b64url(hmac)>"  */

  function buildToken(payload) {
    var body = 'v1.' + b64url(JSON.stringify(payload));
    return hmacSign(body).then(function (sig) { return body + '.' + sig; });
  }

  function verifyToken(token) {
    try {
      var parts = String(token || '').split('.');
      if (parts.length !== 3 || parts[0] !== 'v1') return Promise.resolve(null);
      var body = parts[0] + '.' + parts[1];
      return hmacSign(body).then(function (sig) {
        if (!timingSafeEqual(sig, parts[2])) return null;
        return JSON.parse(payloadToString(b64urlDecode(parts[1])));
      }).catch(function () { return null; });
    } catch (e) {
      return Promise.resolve(null);
    }
  }

  // b64urlDecode returns Uint8Array; decode to string properly.
  function payloadToString(bytes) {
    return new TextDecoder().decode(bytes);
  }

  function storageFor(remember) {
    try {
      return remember ? window.localStorage : window.sessionStorage;
    } catch (e) {
      return window.localStorage;
    }
  }

  function readStoredSession() {
    var raw = null;
    try { raw = window.localStorage.getItem(AUTH.sessionKey); } catch (e) {}
    if (!raw) { try { raw = window.sessionStorage.getItem(AUTH.sessionKey); } catch (e) {} }
    if (!raw) return null;
    try {
      var rec = JSON.parse(raw);
      if (!rec || !rec.token || !rec.exp || rec.exp < Date.now()) {
        clearSession();
        return null;
      }
      return rec;
    } catch (e) { return null; }
  }

  function writeSession(rec, remember) {
    var raw = JSON.stringify(rec);
    try { window.localStorage.removeItem(AUTH.sessionKey); } catch (e) {}
    try { window.sessionStorage.removeItem(AUTH.sessionKey); } catch (e) {}
    storageFor(remember).setItem(AUTH.sessionKey, raw);
  }

  function clearSession() {
    try { window.localStorage.removeItem(AUTH.sessionKey); } catch (e) {}
    try { window.sessionStorage.removeItem(AUTH.sessionKey); } catch (e) {}
    document.documentElement.classList.remove('gs-auth-ok');
  }

  // Full verification: signature + expiry. Resolves the session record or null.
  function verifySession() {
    var rec = readStoredSession();
    if (!rec) return Promise.resolve(null);
    return verifyToken(rec.token).then(function (payload) {
      if (!payload) { clearSession(); return null; }
      if (!payload.x || payload.x < Date.now()) { clearSession(); return null; }
      return {
        email: payload.e,
        username: payload.u,
        role: payload.r,
        exp: payload.x,
        token: rec.token
      };
    });
  }

  function createSession(account, remember) {
    var now = Date.now();
    var payload = {
      e: account.email,
      u: account.username,
      r: account.role,
      i: now,
      x: now + AUTH.sessionTtlMs
    };
    return buildToken(payload).then(function (token) {
      var rec = { token: token, exp: payload.x, user: account.username, email: account.email, role: account.role };
      writeSession(rec, remember !== false);
      return rec;
    });
  }

  /* ------------------------------ rate limit ------------------------------ */

  function readRate() {
    try {
      var r = JSON.parse(window.localStorage.getItem(AUTH.rateKey) || '{}');
      return { fails: Array.isArray(r.fails) ? r.fails : [], lockUntil: r.lockUntil || 0 };
    } catch (e) { return { fails: [], lockUntil: 0 }; }
  }

  function writeRate(r) {
    try { window.localStorage.setItem(AUTH.rateKey, JSON.stringify(r)); } catch (e) {}
  }

  function lockRemainingMs() {
    var r = readRate();
    return Math.max(0, r.lockUntil - Date.now());
  }

  function recordFail() {
    var r = readRate();
    var now = Date.now();
    r.fails = r.fails.filter(function (t) { return now - t < AUTH.failWindowMs; });
    r.fails.push(now);
    if (r.fails.length >= AUTH.maxFails) {
      r.lockUntil = now + AUTH.lockMs;
      r.fails = [];
    }
    writeRate(r);
  }

  function clearFails() {
    writeRate({ fails: [], lockUntil: 0 });
  }

  /* ------------------------------ audit log ------------------------------- */

  function logAudit(event, account) {
    try {
      var log = JSON.parse(window.localStorage.getItem(AUTH.auditKey) || '[]');
      if (!Array.isArray(log)) log = [];
      log.push({
        t: new Date().toISOString(),
        event: event,
        email: account ? account.email : null,
        username: account ? account.username : null
      });
      while (log.length > 50) log.shift();
      window.localStorage.setItem(AUTH.auditKey, JSON.stringify(log));
    } catch (e) {}
  }

  /* --------------------------- login notification ------------------------- */
  /* On every successful login the site:
       1. writes the event to the local audit log,
       2. POSTs to AUTH.notifyEndpoint when configured — that is what emails
          the owner "I am joined and the username is ..." automatically.
     Configure notifyEndpoint per docs/login-email-automation.md. */

  function notifyOwner(account) {
    var message = 'I am joined and the username is ' + account.email;
    logAudit('login', account);
    if (!AUTH.notifyEndpoint) return;
    try {
      fetch(AUTH.notifyEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: 'I am joined',
          message: message,
          username: account.username,
          email: account.email,
          role: account.role,
          time: new Date().toISOString(),
          site: 'galbadrakhstem.github.io'
        })
      }).catch(function () {});
    } catch (e) {}
  }

  /* -------------------------------- login -------------------------------- */

  function login(email, password, remember) {
    email = normEmail(email);

    if (lockRemainingMs() > 0) {
      return Promise.resolve({
        ok: false,
        error: 'Too many attempts. Try again in ' + Math.ceil(lockRemainingMs() / 60000) + ' minute(s).'
      });
    }

    if (!isSchoolEmail(email) && !GMAIL_RE.test(email)) {
      recordFail();
      return Promise.resolve({
        ok: false,
        error: 'Use your school email: ##_#_firstname.lastnameinitial@mongolaspiration.edu.mn (example: 28c_galbadrakh.u@mongolaspiration.edu.mn).'
      });
    }

    var account = findAccount(email);
    var use = account || AUTH.accounts[0]; // always run PBKDF2 (no timing tell)

    if (!crypto || !crypto.subtle) {
      return Promise.resolve({ ok: false, error: 'Secure context (HTTPS) is required.' });
    }

    return pbkdf2Hex(String(password || ''), use.pbkdf2.salt, use.pbkdf2.iterations)
      .then(function (hex) {
        var goodPassword = account && timingSafeEqual(hex, account.pbkdf2.hash);
        if (!account) {
          recordFail();
          return { ok: false, error: 'Wrong email or password.' };
        }
        if (!goodPassword) {
          recordFail();
          return { ok: false, error: 'Wrong email or password.' };
        }
        clearFails();
        return createSession(account, remember !== false).then(function (rec) {
          notifyOwner(account);
          return {
            ok: true,
            session: rec,
            username: account.username,
            email: account.email,
            role: account.role,
            message: 'I am joined and the username is ' + account.email
          };
        });
      })
      .catch(function () {
        return { ok: false, error: 'Sign-in failed. Please try again.' };
      });
  }

  function logout() {
    var rec = readStoredSession();
    logAudit('logout', rec ? { email: rec.email, username: rec.user || rec.username } : null);
    clearSession();
  }

  /* ----------------------------- page guarding ---------------------------- */

  function pageAccess() {
    return document.documentElement.getAttribute('data-gs-access') || 'owner';
  }

  function loginUrl() {
    var el = document.querySelector('meta[name="gs-login-url"]');
    var base = el ? el.getAttribute('content') : '/login/';
    return base;
  }

  function nextParam() {
    var next = location.pathname + location.search;
    return encodeURIComponent(next);
  }

  function redirectToLogin() {
    var target = loginUrl() + '?next=' + nextParam();
    if (location.pathname.replace(/index\.html$/, '') !== loginUrl().replace(/index\.html$/, '')) {
      location.replace(target);
    }
  }

  // Continuous guard: re-checks every few seconds and on page events. This is
  // what defeats Safari "Hide Distracting Items" — content only shows while
  // the session is valid, so hiding the lock UI reveals nothing.
  function startWatchdog() {
    if (pageAccess() === 'public') return;

    function recheck() {
      verifySession().then(function (s) {
        if (s) {
          document.documentElement.classList.add('gs-auth-ok');
        } else {
          redirectToLogin();
        }
      });
    }

    window.addEventListener('pageshow', function (e) { if (e.persisted) recheck(); });
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') recheck();
    });
    window.addEventListener('storage', function (ev) {
      if (!ev.key || ev.key === AUTH.sessionKey) recheck();
    });
    window.addEventListener('beforeprint', recheck);
    setInterval(recheck, 5000);
  }

  /* ------------------------------ navbar UI ------------------------------- */

  function renderNav(session) {
    var slot = document.getElementById('gs-auth-nav');
    if (!slot) return;
    slot.classList.add('nav-auth');
    if (session) {
      slot.innerHTML =
        '<span class="nav-user" title="Signed in as ' + session.username + '">' +
        '<span class="nav-user-name">' + session.username + '</span>' +
        '</span>' +
        '<a class="nav-link nav-logout" href="#" id="gs-logout-link"><span>Log out</span></a>';
      var out = document.getElementById('gs-logout-link');
      if (out) out.addEventListener('click', function (e) {
        e.preventDefault();
        logout();
        location.href = loginUrl();
      });
    } else {
      slot.innerHTML = '<a class="nav-link nav-login" href="' + loginUrl() + '"><span>Log in</span></a>';
    }

    // Mark owner-only nav links for guests.
    if (!session) {
      var links = document.querySelectorAll('[data-gs-protected="true"]');
      Array.prototype.forEach.call(links, function (a) {
        if (!a.querySelector('.nav-lock')) {
          var lock = document.createElement('span');
          lock.className = 'nav-lock';
          lock.setAttribute('aria-hidden', 'true');
          lock.textContent = '\u{1F512}';
          var span = a.querySelector('span') || a;
          span.appendChild(document.createTextNode(' '));
          span.appendChild(lock);
          a.setAttribute('title', 'Owner only — log in to view');
        }
      });
    }
  }

  /* ------------------------------ login form ------------------------------ */

  function initLoginForm() {
    var form = document.getElementById('login-form');
    if (!form) return;

    var emailInput = document.getElementById('login-email');
    var pwInput = document.getElementById('login-password');
    var remember = document.getElementById('login-remember');
    var userPreview = document.getElementById('login-username-preview');
    var errBox = document.getElementById('login-error');
    var okBox = document.getElementById('login-success');
    var btn = document.getElementById('login-submit');

    function setError(msg) {
      if (errBox) {
        errBox.textContent = msg || '';
        errBox.hidden = !msg;
      }
    }

    function updatePreview() {
      if (!userPreview || !emailInput) return;
      var u = deriveUsername(emailInput.value);
      if (u) {
        userPreview.innerHTML = 'Username: <strong>' + u + '</strong>';
        userPreview.classList.add('has-user');
      } else {
        userPreview.textContent = 'Username will appear here';
        userPreview.classList.remove('has-user');
      }
    }

    if (emailInput) {
      emailInput.addEventListener('input', updatePreview);
      updatePreview();
    }

    // Already signed in? Leave immediately.
    verifySession().then(function (s) {
      if (s) {
        var next = new URLSearchParams(location.search).get('next');
        if (!next || !/^\/(?!\/)/.test(next)) next = '/';
        location.replace(next);
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      setError('');
      if (okBox) okBox.hidden = true;

      var lockMs = lockRemainingMs();
      if (lockMs > 0) {
        setError('Too many attempts. Try again in ' + Math.ceil(lockMs / 60000) + ' minute(s).');
        return;
      }

      if (btn) { btn.disabled = true; btn.textContent = 'Checking\u2026'; }

      login(emailInput.value, pwInput.value, remember ? remember.checked : true).then(function (res) {
        if (btn) { btn.disabled = false; btn.textContent = 'Log in'; }
        if (res.ok) {
          if (okBox) {
            okBox.textContent = 'Welcome, ' + res.username + ' \u2014 ' + res.message;
            okBox.hidden = false;
          }
          setError('');
          setTimeout(function () {
            var next = new URLSearchParams(location.search).get('next');
            if (!next || !/^\/(?!\/)/.test(next)) next = '/';
            location.replace(next);
          }, 600);
        } else {
          setError(res.error);
          if (pwInput) { pwInput.value = ''; pwInput.focus(); }
        }
      });
    });
  }

  /* -------------------------------- bootstrap ----------------------------- */

  function init() {
    // Public pages reveal content immediately (handled inline in <head> too).
    if (pageAccess() === 'public') {
      document.documentElement.classList.add('gs-auth-ok');
      verifySession().then(renderNav);
    } else {
      verifySession().then(function (s) {
        if (s) {
          document.documentElement.classList.add('gs-auth-ok');
          renderNav(s);
        } else {
          redirectToLogin();
        }
      });
    }
    initLoginForm();
    startWatchdog();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.GalbadrakhAuth = {
    login: login,
    logout: logout,
    verifySession: verifySession,
    deriveUsername: deriveUsername,
    isSchoolEmail: isSchoolEmail
  };
})();
