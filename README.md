# GTA VI YouTube Countdown

A full-screen, responsive countdown scene intended for OBS and YouTube livestreams.

## Publish to GitHub Pages
1. Unzip this folder.
2. Upload `index.html`, `styles.css`, `config.js`, and `script.js` to the root of your GitHub repository, replacing the old versions.
3. Commit the changes and wait for GitHub Pages to deploy.
4. Open your GitHub Pages URL and refresh.

## Add to OBS
1. Add a **Browser** source.
2. Paste your GitHub Pages URL.
3. Set width to **1920** and height to **1080**.
4. Right-click the source → **Transform** → **Fit to Screen**.
5. Preview before going live.

## Important
The countdown keeps the previous site's rule: **November 19, 2026 at 00:00 in each viewer's local time zone**. This is not a verified official global release instant. For one globally synchronized instant, use a verified timestamp in UTC (ISO format ending in `Z`).

The country label comes from the browser's selected IANA time zone, not IP or YouTube country detection. The manually maintained country table is not exhaustive; some time zones are shared and cannot uniquely identify a country. Add entries in `config.js` as needed.
