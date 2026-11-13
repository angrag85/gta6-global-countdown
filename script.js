
(() => {
  const cfg = window.GTA6_CONFIG || {};
  const $ = id => document.getElementById(id);

  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  const locale = navigator.language || "en";

  const zones = {
    "Asia/Kolkata": ["🇮🇳", "India"],
    "America/New_York": ["🇺🇸", "United States"],
    "America/Chicago": ["🇺🇸", "United States"],
    "America/Denver": ["🇺🇸", "United States"],
    "America/Los_Angeles": ["🇺🇸", "United States"],
    "Europe/London": ["🇬🇧", "United Kingdom"],
    "Europe/Paris": ["🇫🇷", "France"],
    "Europe/Berlin": ["🇩🇪", "Germany"],
    "Asia/Tokyo": ["🇯🇵", "Japan"],
    "Asia/Dubai": ["🇦🇪", "UAE"],
    "Asia/Singapore": ["🇸🇬", "Singapore"],
    "Asia/Karachi": ["🇵🇰", "Pakistan"],
    "Asia/Dhaka": ["🇧🇩", "Bangladesh"],
    "Australia/Sydney": ["🇦🇺", "Australia"],
    "Pacific/Auckland": ["🇳🇿", "New Zealand"]
  };

  const detected = zones[tz] || ["🌍", "Your region"];

  $("flag").textContent = detected[0];
  $("country").textContent = detected[1];
  $("timezone").textContent = tz;

  const override = cfg.releaseOverrides?.[tz];
  const target = override
    ? new Date(override)
    : new Date(cfg.releaseDate || "2026-11-19T00:00:00");

  $("local-date").textContent =
    new Intl.DateTimeFormat(locale, {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: tz
    }).format(target);

  function tick() {
    let ms = target.getTime() - Date.now();

    if (ms <= 0) {
      ["days", "hours", "minutes", "seconds"].forEach(id => {
        $(id).textContent = "00";
      });
      $("status").textContent = "Launch time has arrived!";
      return;
    }

    const pad = n => String(n).padStart(2, "0");
    const d = Math.floor(ms / 86400000);
    ms %= 86400000;
    const h = Math.floor(ms / 3600000);
    ms %= 3600000;
    const m = Math.floor(ms / 60000);
    const s = Math.floor((ms % 60000) / 1000);

    $("days").textContent = pad(d);
    $("hours").textContent = pad(h);
    $("minutes").textContent = pad(m);
    $("seconds").textContent = pad(s);
  }

  tick();
  setInterval(tick, 1000);

  const id = (cfg.youtubeVideoId || "").trim();

  if (id) {
    $("youtube-player").src =
      "https://www.youtube-nocookie.com/embed/" +
      encodeURIComponent(id);

    $("youtube-player").hidden = false;
    $("video-placeholder").hidden = true;
  }
})();
