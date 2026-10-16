# Galbadrakh STEM

A minimalist, Jekyll-powered library of independent study resources for Cambridge International AS & A Level:

- Mathematics (9709)
- Physics (9702)
- Computer Science (9618)

The public site is intended for `https://galbadrakhstem.github.io`. Math notation is rendered with MathJax v3; shared layouts and academic reading styles live in `_layouts/` and `assets/css/`.

## Login system

Home, Physics and Astronomy (Club) and the login page are public; every other page requires signing in at `/login/` with a registered school email (`##_#_firstname.lastnameinitial@mongolaspiration.edu.mn`) and password. The username (e.g. `Galbadrakh.U`) is derived from the email automatically. Passwords are verified with PBKDF2-HMAC-SHA256 (never stored in plaintext) and sessions stay signed in until "Log out". See `docs/login-email-automation.md` for the access rules, login-email automation and honest security notes (GitHub Pages is a public host — the gate is strong deterrent protection, not server-side privacy).

## Local development

With Jekyll installed, run `jekyll serve` from the repository root and open the local address printed by Jekyll. GitHub Pages builds the site from the repository root when Pages is configured to publish the default branch.

## Content conventions

- Use the current Cambridge International syllabus for the relevant examination year as the authority for syllabus coverage and paper combinations.
- Keep equations in Markdown as `$...$` inline and `$$...$$` on their own lines for display mathematics.
- Handouts use the `handout` layout and should show working clearly enough for independent study.
- Inside raw HTML blocks (`<div class="notice">`, `<ul class="link-list">`, `<p>`), write links as `<a href="{{ '/path/' | relative_url }}">…</a>`. kramdown does not parse Markdown inside HTML blocks, so `[text](url)` there is printed literally.
