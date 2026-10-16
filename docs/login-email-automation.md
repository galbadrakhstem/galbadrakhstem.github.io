# Login system — how it works, email automation, and honest security notes

## What is implemented

`assets/js/auth.js` + `login.md` + `_layouts/default.html` implement a login
system for this static (GitHub Pages) site.

### Access rules

| Page | Who can open it |
| --- | --- |
| `/` (Home), `/club/` (Physics and Astronomy), `/login/` | anyone |
| Everything else (Astronomy, AS and A Level, About, CV, all handouts) | signed-in owner only |

A page is public only when its front matter says `access: public`. Every other
page is protected by default — new pages are safe automatically.

### Accounts (allowlist)

Only these emails may sign in (checked strictly; everything else is rejected):

1. `28c_galbadrakh.u@mongolaspiration.edu.mn` — Owner
2. `Galbadrakh9998@gmail.com` — Owner

The school email format is validated before the allowlist:

```
##_#_firstname.lastnameinitial@mongolaspiration.edu.mn
 28c_galbadrakh.u
 2 digits  = graduation year      (28 → graduates 2028)
 1 letter  = class, a–d            (c → class C)
 first name, a dot, surname initial (galbadrakh.u → Galbadrakh.U)
```

The username (`Galbadrakh.U`) is derived automatically and shown live on the
login page while typing.

### Password

- The owner password is checked with **PBKDF2-HMAC-SHA256, 310 000 iterations,
  random 16-byte salt**. The plaintext is never stored — only the hash
  (`assets/js/auth.js`, `pbkdf2.hash`).
- To change the password later: generate a new hash (see “Changing the
  password” below) and replace `pbkdf2.salt` / `pbkdf2.hash` in `auth.js`.
- 5 wrong attempts lock the form for 15 minutes.

### Sessions (owner never types the password twice)

On success the browser stores an HMAC-SHA256-signed token (365 days,
`localStorage`) with the username, email and role. “Log out” in the navbar ends
it. Uncheck “Keep me signed in” to stay signed in only until the tab closes.

### Why the iOS Safari trick no longer works

Safari’s **Hide Distracting Items** used to remove the old lock overlay and
reveal the page underneath. The gate is no longer an overlay:

1. Protected page content is `display:none` until the session is verified —
   hiding the notice reveals nothing at all.
2. Guests are redirected to `/login/` before first paint (inline `<head>` script).
3. A watchdog re-verifies the session every 5 seconds, on tab focus, on print
   and on back/forward cache restore — tampering with the DOM locks again.

## Email on login (“I am joined and the username is …”)

Every successful login writes an audit entry (`gs_auth_log_v1` in the browser)
and, when `notifyEndpoint` is set in `assets/js/auth.js`, POSTs:

```json
{
  "subject": "I am joined",
  "message": "I am joined and the username is 28c_galbadrakh.u@mongolaspiration.edu.mn",
  "username": "Galbadrakh.U",
  "email": "28c_galbadrakh.u@mongolaspiration.edu.mn",
  "role": "owner",
  "time": "2026-10-16T…",
  "site": "galbadrakhstem.github.io"
}
```

to that endpoint, which emails the owner automatically.

### Free setup: Google Apps Script (5 minutes)

1. Go to <https://script.google.com> → **New project**.
2. Paste this and change the address to your school email:

```javascript
function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  MailApp.sendEmail({
    to: '28c_galbadrakh.u@mongolaspiration.edu.mn',
    subject: 'I am joined',
    html: '<p>I am joined and the username is ' + d.email +
          '</p><p>Username: ' + d.username +
          '<br>Time: ' + d.time + '<br>Site: ' + d.site + '</p>'
  });
  return ContentService.createTextOutput('ok');
}
```

3. **Deploy → New deployment → Web app → Execute as: Me →
   Who has access: Anyone**. Copy the `/exec` URL.
4. In `assets/js/auth.js` set:

```javascript
notifyEndpoint: 'https://script.google.com/macros/s/XXXXXXXX/exec',
```

Every login will now email you “I am joined and the username is …”.

> The deployed site is static and has no server, so it cannot send mail by
> itself — an endpoint like the one above is required for fully automatic
> notifications. Without it, logins are still recorded in the browser audit log.

## Honest security notes (please read)

**GitHub Pages cannot be made truly private.** The site is a public URL
(`galbadrakhstem.github.io`); GitHub only offers private Pages on Enterprise
plans. This login system is strong *deterrent* protection (hashed password,
signed sessions, format checks, rate limiting, anti-tamper watchdog), but a
person who opens “View Source” can still read the protected page HTML, because
on a static host the content must be delivered to the browser.

What is done to keep it hidden:

- `noindex, nofollow` on every page and `robots.txt` disallows all crawlers,
  so search engines will not list it.
- Only the two allowlisted emails can pass the login form.

For real server-side privacy, the options are:

1. **Cloudflare Access** (free tier) in front of the site — real login enforced
   by Cloudflare, nothing is sent to unauthenticated visitors.
2. **GitHub Enterprise private Pages** (paid).
3. Moving handouts to a private Google Drive / Classroom and linking from the
   public pages.

## Changing the password

```bash
python3 - <<'EOF'
import hashlib, os
salt = os.urandom(16).hex()
print('salt:', salt)
print('hash:', hashlib.pbkdf2_hmac('sha256', b'NEW-PASSWORD-HERE',
      bytes.fromhex(salt), 310000, dklen=32).hex())
EOF
```

Put the two hex strings into `pbkdf2.salt` / `pbkdf2.hash` in
`assets/js/auth.js`. Commit and push.
