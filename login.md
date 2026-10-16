---
layout: default
title: Log in
access: public
permalink: /login/
description: Sign in to Galbadrakh STEM — school email login for Mongol Aspiration International School accounts.
---

<div class="login-wrap">
  <div class="login-card">
    <h1 class="login-title">Log in</h1>
    <p class="login-lead">
      Home and Physics&nbsp;and&nbsp;Astronomy are open to everyone.
      All other pages are for registered accounts only.
    </p>

    <form id="login-form" autocomplete="on" novalidate>
      <div class="login-field">
        <label for="login-email">Username (school email)</label>
        <input
          id="login-email"
          name="email"
          type="email"
          inputmode="email"
          spellcheck="false"
          autocapitalize="off"
          autocomplete="username"
          placeholder="28c_name.surnameinitial@mongolaspiration.edu.mn"
          required
        >
        <p class="login-hint">
          Format: <code>##_#_firstname.lastnameinitial@mongolaspiration.edu.mn</code>.
          The first two numbers are your graduation year, the letter is your class
          (a–d), then your first name, a dot, and your surname initial.
        </p>
        <p class="login-username" id="login-username-preview">Username will appear here</p>
      </div>

      <div class="login-field">
        <label for="login-password">Password</label>
        <input
          id="login-password"
          name="password"
          type="password"
          autocomplete="current-password"
          placeholder="Password"
          required
        >
      </div>

      <label class="login-check">
        <input type="checkbox" id="login-remember" checked>
        <span>Keep me signed in</span>
      </label>

      <button type="submit" id="login-submit" class="login-btn">Log in</button>

      <p class="login-error" id="login-error" role="alert" hidden></p>
      <p class="login-success" id="login-success" role="status" hidden></p>
    </form>

    <p class="login-note">
      Your password is checked with PBKDF2 (310,000 rounds) and is never stored.
      Five wrong attempts lock the form for 15 minutes.
    </p>
  </div>

  <p class="login-foot">
    <a href="{{ '/' | relative_url }}">← Back to Home</a>
  </p>
</div>
