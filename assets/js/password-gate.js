/* Sign-in gate for static (GitHub Pages) hosting.
   Single account: username "Galbadrakh Ulziibold" + password (verified against a
   SHA-256 hash; the plaintext password is never stored anywhere).

   Session: on success a derived token (SHA-256 of the password-hash + a salt) is
   stored in localStorage and the browser is considered signed in until "Sign out"
   is pressed — no expiry. A tiny inline script in <head> does a synchronous
   compare of that token so returning visitors see no "locked" flash.

   NOTE: This is a deterrent, not real security — the page content is still
   present in the HTML source, and anyone who views this file can read the hash.
   For true protection, host the content behind a real auth server/proxy. */
(function () {
  'use strict';

  var USERNAME = 'Galbadrakh Ulziibold';
  var HASH = 'bb29a75dbff4cdd4284cf94e2d199ab7c8a33624f350c1581c2af3049e610148';
  var SALT = 'galbadrakh-stem-2026';
  var KEY = 'gs_auth_token_v2';
  var MAX_FAILS = 5;
  var LOCK_MS = 60000;

  var fails = 0;
  var lockedUntil = 0;
  var unlockTimer = null;

  async function sha256(str) {
    if (window.crypto && crypto.subtle) {
      var buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
      return Array.from(new Uint8Array(buf)).map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
    }
    throw new Error('crypto.subtle unavailable');
  }

  function el(id) { return document.getElementById(id); }

  function showGate() {
    var g = el('pw-gate');
    if (g) g.hidden = false;
    document.documentElement.classList.remove('pw-unlocked');
    document.body.classList.add('pw-locked');
  }

  function hideGate() {
    var g = el('pw-gate');
    if (g) g.hidden = true;
    document.documentElement.classList.add('pw-unlocked');
    document.body.classList.remove('pw-locked');
  }

  function setErr(msg) {
    var e = el('pw-err');
    if (e) e.textContent = msg || '';
  }

  function clearToken() {
    try { localStorage.removeItem(KEY); } catch (err) { /* storage blocked */ }
  }

  function readToken() {
    try { return localStorage.getItem(KEY) || ''; } catch (err) { return ''; }
  }

  async function tokenValid() {
    var t = readToken();
    if (!t) return false;
    try {
      return t === (await sha256(HASH + ':' + SALT));
    } catch (e) {
      return false; // fail closed if crypto unavailable
    }
  }

  async function attempt() {
    if (unlockTimer) {
      setErr('Too many failed attempts — try again in a moment.');
      return;
    }
    var input = el('pw-input');
    var userInput = el('user-input');
    var val = input ? input.value : '';
    var uname = userInput ? userInput.value.trim() : '';
    if (!val) { setErr('Enter your password.'); return; }

    var btn = el('pw-btn');
    if (btn) btn.disabled = true;

    try {
      var h = await sha256(val);
      var ok = h === HASH && uname === USERNAME;
      // Small uniform delay so timing does not reveal which field was wrong.
      await new Promise(function (r) { setTimeout(r, 300); });

      if (ok) {
        fails = 0;
        try { localStorage.setItem(KEY, await sha256(HASH + ':' + SALT)); } catch (e) { /* continue anyway */ }
        hideGate();
        setErr('');
        if (input) input.value = '';
        return;
      }

      fails += 1;
      if (fails >= MAX_FAILS) {
        lockedUntil = Date.now() + LOCK_MS;
        unlockTimer = setInterval(tick, 500);
        tick();
      } else {
        setErr('Incorrect username or password.');
      }
    } catch (e) {
      setErr('Secure context required (HTTPS).');
    } finally {
      if (btn) btn.disabled = false;
      if (input) { input.value = ''; input.focus(); }
    }
  }

  function tick() {
    var remaining = lockedUntil - Date.now();
    if (remaining <= 0) {
      if (unlockTimer) { clearInterval(unlockTimer); unlockTimer = null; }
      lockedUntil = 0;
      fails = 0;
      setErr('');
      var input = el('pw-input');
      if (input) input.focus();
      return;
    }
    setErr('Too many failed attempts — try again in ' + Math.ceil(remaining / 1000) + 's.');
  }

  function signOut() {
    clearToken();
    location.reload();
  }

  async function verifySession() {
    // Called on load and on back/forward restore: keep the gate hidden only if
    // the stored token still matches.
    if (await tokenValid()) {
      hideGate();
    } else {
      clearToken();
      showGate();
      var input = el('pw-input');
      if (input) setTimeout(function () { input.focus(); }, 50);
    }
  }

  function init() {
    var btn = el('pw-btn');
    var input = el('pw-input');
    var userForm = el('login-form');
    if (userForm) userForm.addEventListener('submit', function (e) { e.preventDefault(); attempt(); });
    if (btn) btn.addEventListener('click', attempt);
    if (input) {
      input.addEventListener('keydown', function (e) { if (e.key === 'Enter') attempt(); });
      setTimeout(function () { input.focus(); }, 50);
    }
    var so = el('signout-btn');
    if (so) so.addEventListener('click', function (e) { e.preventDefault(); signOut(); });
    verifySession();
  }

  // Re-verify on back/forward cache restore (bfcache) so stale state can't bypass.
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) verifySession();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
