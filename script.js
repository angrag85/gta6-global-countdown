
(() => {
  const cfg = window.GTA6_CONFIG || {};
  const $ = id => document.getElementById(id);

  // Detect visitor's timezone
  const tz = Intl.DateTimeFormat()
    .resolvedOptions().timeZone || "UTC";

  const locale = navigator.language || "en";

  // Country detection using timezone
  const countryMap = {
    "Asia/Kolkata": ["🇮🇳", "India"],
    "Asia/Calcutta": ["🇮🇳", "India"],
    "America/New_York": ["🇺🇸", "United States"],
    "America/Chicago": ["🇺🇸", "United States"],
    "America/Denver": ["🇺🇸", "United States"],
    "America/Los_Angeles": ["🇺🇸", "United States"],
    "America/Phoenix": ["🇺🇸", "United States"],
    "Europe/London": ["🇬🇧", "United Kingdom"],
    "Europe/Paris": ["🇫🇷", "France"],
    "Europe/Berlin": ["🇩🇪", "Germany"],
    "Europe/Rome": ["🇮🇹", "Italy"],
    "Europe/Madrid": ["🇪🇸", "Spain"],
    "Asia/Tokyo": ["🇯🇵", "Japan"],
    "Asia/Seoul": ["🇰🇷", "South Korea"],
    "Asia/Dubai": ["🇦🇪", "United Arab Emirates"],
    "Asia/Karachi": ["🇵🇰", "Pakistan"],
    "Asia/Dhaka": ["🇧🇩", "Bangladesh"],
    "Asia/Kathmandu": ["🇳🇵", "Nepal"],
    "Asia/Colombo": ["🇱🇰", "Sri Lanka"],
    "Asia/Singapore": ["🇸🇬", "Singapore"],
    "Asia/Bangkok": ["🇹🇭", "Thailand"],
    "Asia/Jakarta": ["🇮🇩", "Indonesia"],
    "Asia/Manila": ["🇵🇭", "Philippines"],
    "Asia/Shanghai": ["🇨🇳", "China"],
    "Asia/Hong_Kong": ["🇭🇰", "Hong Kong"],
    "Europe/Amsterdam": ["🇳🇱", "Netherlands"],
    "Europe/Zurich": ["🇨🇭", "Switzerland"],
    "Europe/Moscow": ["🇷🇺", "Russia"],
    "America/Toronto": ["🇨🇦", "Canada"],
    "America/Vancouver": ["🇨🇦", "Canada"],
    "America/Mexico_City": ["🇲🇽", "Mexico"],
    "America/Sao_Paulo": ["🇧🇷", "Brazil"],
    "Australia/Sydney": ["🇦🇺", "Australia"],
    "Australia/Melbourne": ["🇦🇺", "Australia"],
    "Australia/Perth": ["🇦🇺", "Australia"],
    "Pacific/Auckland": ["🇳🇿", "New Zealand"]
  };

  // Use timezone first, browser language as fallback
  let detected = countryMap[tz];

  if (!detected) {
    const countryCode = locale.split("-")[1]?.toUpperCase();

    const fallback = {
      IN: ["🇮🇳", "India"],
      US: ["🇺🇸", "United States"],
      GB: ["🇬🇧", "United Kingdom"],
      CA: ["🇨🇦", "Canada"],
      AU: ["🇦🇺", "Australia"],
      JP: ["🇯🇵", "Japan"],
      DE: ["🇩🇪", "Germany"],
      FR: ["🇫🇷", "France"],
      BR: ["🇧🇷", "Brazil"]
    };

    detected = fallback[countryCode] ||
      ["🌍", "Your region"];
  }

  // Display country and timezone
  $("flag").textContent = detected[0];
  $("country").textContent = detected[1];
  $("timezone").textContent = tz;

  // Calculate local release countdown
  const override =
    cfg.releaseOverrides &&
    cfg.releaseOverrides[tz];

  const target = override
    ? new Date(override)
    : new Date(
        cfg.releaseDate ||
        "2026-11-19T00:00:00"
      );

  // Display local release date
  $("local-date").textContent =
    new Intl.DateTimeFormat(locale, {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: tz
    }).format(target);

  // Countdown timer
  const pad = n =>
    String(n).padStart(2, "0");

  function tick() {
    let ms = target.getTime() - Date.now();

    if (ms <= 0) {
      $("days").textContent = "00";
      $("hours").textContent = "00";
      $("minutes").textContent = "00";
      $("seconds").textContent = "00";

      $("status").textContent =
        "The scheduled local launch time has arrived. Check your platform for availability.";

      return;
    }

    const days = Math.floor(ms / 86400000);
    ms %= 86400000;

    const hours = Math.floor(ms / 3600000);
    ms %= 3600000;

    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor(
      (ms % 60000) / 1000
    );

    $("days").textContent = pad(days);
    $("hours").textContent = pad(hours);
    $("minutes").textContent = pad(minutes);
    $("seconds").textContent = pad(seconds);
  }

  tick();
  setInterval(tick, 1000);

  // Connect YouTube livestream
  const videoId =
    (cfg.youtubeVideoId || "").trim();

  if (videoId) {
    $("youtube-player").src =
      "https://www.youtube-nocookie.com/embed/" +
      encodeURIComponent(videoId);

    $("youtube-player").hidden = false;
    $("video-placeholder").hidden = true;
  }

})();
