# GTA VI Global Countdown — starter website

A static website that detects a visitor's browser time zone and displays a local countdown, plus an optional embedded YouTube livestream.

## Important accuracy note
The starter defaults to **November 19, 2026 at 00:00 in the visitor's detected time zone**. This is a configurable assumption, not a guarantee that every market/platform unlocks at that exact instant. Confirm Rockstar/platform launch timing for each market before advertising it as exact. Browser locale is only an approximate country signal; the browser time zone is used for the clock.

For markets with a confirmed exact timestamp, add a time-zone override in `config.js` using an ISO 8601 timestamp with offset, for example:
```js
releaseOverrides: {
  "Asia/Kolkata": "2026-11-19T00:00:00+05:30"
}
```
IANA time-zone keys can be found from the browser's `Intl.DateTimeFormat().resolvedOptions().timeZone`.

## Add your YouTube livestream
1. Create or schedule a YouTube livestream in YouTube Studio.
2. Copy the **video ID** from the stream/watch URL. For `https://www.youtube.com/watch?v=AbCdEf12345`, the ID is `AbCdEf12345`.
3. Put it in `config.js`:
   `youtubeVideoId: "AbCdEf12345"`
4. The stream must be public or otherwise embeddable. Check YouTube's embedding/live settings.

## Publish free with GitHub Pages
1. Sign in or create an account at https://github.com/
2. Create a new public repository, e.g. `gta6-global-countdown`.
3. Upload `index.html`, `styles.css`, `config.js`, `script.js`, and `README.md` from this folder to the repository root.
4. Open repository **Settings → Pages**.
5. Under Build and deployment, choose **Deploy from a branch**, branch **main**, folder **/(root)**, then Save.
6. Wait for GitHub Pages to publish. Your site URL will look like `https://YOUR-USERNAME.github.io/gta6-global-countdown/`.

## Test
Open the site on a phone and computer. Change the device/browser time zone (or use browser devtools Sensors) to test different zones. The visitor's browser performs the countdown; no location permission or IP geolocation service is required.

## YouTube live embed note
The video itself remains identical for all viewers. The local countdown is personalized on the website surrounding the embedded video, not inside the YouTube player or on YouTube's watch page.

## Branding and rights
This is a fan-made, unofficial countdown. Do not use Rockstar logos, copyrighted game screenshots, music, trailers, or other assets unless you have permission or a valid legal basis. Use artwork you are licensed to use. YouTube may restrict streams containing copyrighted game footage/music.
