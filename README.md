# humanhabits.app

Marketing site and deep link infrastructure for Human Habits.

Hosted on Cloudflare Pages. Auto-deploys from `main`.

## Structure

```
index.html                          → Landing page
invite/index.html                   → Friend invite fallback (browser)
.well-known/assetlinks.json         → Android deep link verification
.well-known/apple-app-site-association → iOS universal link verification
_redirects                          → Routes /invite/CODE to invite page
_headers                            → Content-type headers for .well-known files
```

## Deep Links

Friend invite links use the format: `https://humanhabits.app/invite/CODE`

- **App installed**: OS intercepts the link and opens the app directly
- **App not installed**: Falls through to `invite/index.html` with download buttons

## TODO

- [ ] Replace `TEAMID` in apple-app-site-association with your Apple Team ID
- [ ] Replace `sha256_cert_fingerprints` in assetlinks.json with your Android signing key
- [ ] Replace package names if different from `app.humanhabits.ios` / `app.humanhabits.android`
- [ ] Add App Store / Play Store URLs to invite page buttons
