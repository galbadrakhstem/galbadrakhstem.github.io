/* Client-side password gate for static (GitHub Pages) hosting.
   NOTE: This is a deterrent, not real security — the page content is still
   present in the HTML source. For true protection, host behind an auth proxy. */
(function () {
  'use strict';
  var HASH = 'bb29a75dbff4cdd4284cf94e2d199ab7c8a33624f350c1581c2af3049e610148';
  var KEY = 'site_unlocked_v1';

  function isUnlocked() {
    try { return sessionStorage.getItem(KEY) === '1'; } catch (e) { return false; }
  }

  async function sha256(str) {
    if (window.crypto && crypto.subtle) {
      var buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
      return Array.from(new Uint8Array(buf)).map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
    }
    // Fallback (non-secure context): simple compare is not used; fail closed.
    throw new Error('crypto.subtle unavailable');
  }

  function showGate() {
    var g = document.getElementById('pw-gate');
    if (g) g.hidden = false;
    document.body.classList.add('pw-locked');
  }

  function hideGate() {
    var g = document.getElementById('pw-gate');
    if (g) g.hidden = true;
    document.body.classList.remove('pw-locked');
  }

  async function attempt() {
    var input = document.getElementById('pw-input');
    var err = document.getElementById('pw-err');
    var val = input ? input.value : '';
    try {
      var h = await sha256(val);
      if (h === HASH) {
        try { sessionStorage.setItem(KEY, '1'); } catch (e) {}
        hideGate();
        return;
      }
    } catch (e) {
      if (err) err.textContent = 'Secure context required (HTTPS).';
      return;
    }
    if (err) err.textContent = 'Incorrect password.';
    if (input) { input.value = ''; input.focus(); }
  }

  function init() {
    if (isUnlocked()) { hideGate(); return; }
    showGate();
    var btn = document.getElementById('pw-btn');
    var input = document.getElementById('pw-input');
    if (btn) btn.addEventListener('click', attempt);
    if (input) {
      input.addEventListener('keydown', function (e) { if (e.key === 'Enter') attempt(); });
      setTimeout(function () { input.focus(); }, 50);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
