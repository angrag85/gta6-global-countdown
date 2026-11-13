/*
  SETUP:
  1. Replace youtubeVideoId with your YouTube LIVE video ID (not your channel ID).
  2. Default countdown assumes midnight at the start of November 19, 2026
     in the visitor's detected time zone. Confirm official availability by market.
  3. For precise country-specific launch times, add IANA time-zone overrides
     in releaseOverrides. Example: "America/Los_Angeles": "2026-11-19T00:00:00-08:00"
*/
window.GTA6_CONFIG = {
  youtubeVideoId: "",
  releaseDate: "2026-11-19T00:00:00",
  releaseOverrides: {
    // "Asia/Kolkata": "2026-11-19T00:00:00+05:30",
    // "America/Los_Angeles": "2026-11-19T00:00:00-08:00"
  }
};