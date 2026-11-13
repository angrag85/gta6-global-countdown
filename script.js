
// ========================================
// GTA 6 GLOBAL COUNTDOWN
// ========================================

// GTA 6 countdown target: November 19, 2026
const LAUNCH_DATE = new Date("2026-11-19T00:00:00");

// ========================================
// COUNTRY DETECTION
// ========================================

async function detectCountry() {
  const countryElementIds = [
    "country",
    "user-country",
    "country-name"
  ];

  function showCountry(name, flag) {
    const countryText = `${flag} ${name}`;

    countryElementIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = countryText;
      }
    });
  }

  function showFallback() {
    showCountry("Country unavailable", "🌍");
  }

  try {
    // Detect country using visitor's IP address
    const response = await fetch("https://ipwho.is/");
    if (!response.ok) throw new Error("Country lookup failed");

    const data = await response.json();

    if (!data.success || !data.country_code) {
      throw new Error("Country not detected");
    }

    const countryCode = data.country_code.toUpperCase();

    // Exclude Pakistan
    if (countryCode === "PK") {
      showCountry("Other Region", "🌍");
      return;
    }

    // Convert country code into a flag emoji
    const flag = countryCode
      .split("")
      .map(char =>
        String.fromCodePoint(127397 + char.charCodeAt(0))
      )
      .join("");

    showCountry(data.country, flag);

  } catch (error) {
    console.error("Country detection error:", error);

    // Fallback to browser locale if IP lookup fails
    try {
      const locale = new Intl.Locale(
        navigator.language || "en-US"
      ).maximize();

      const code = locale.region;

      if (code && code !== "PK") {
        const displayName = new Intl.DisplayNames(
          [navigator.language || "en"],
          { type: "region" }
        ).of(code);

        const flag = code
          .split("")
          .map(char =>
            String.fromCodePoint(127397 + char.charCodeAt(0))
          )
          .join("");

        showCountry(displayName, flag);
      } else {
        showFallback();
      }
    } catch {
      showFallback();
    }
  }
}

// ========================================
// TIMEZONE DETECTION
// ========================================

function detectTimezone() {
  const timezone =
    Intl.DateTimeFormat().resolvedOptions().timeZone;

  const timezoneElementIds = [
    "timezone",
    "user-timezone"
  ];

  timezoneElementIds.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = timezone || "Unknown timezone";
    }
  });

  return timezone;
}

// ========================================
// COUNTDOWN
// ========================================

function updateCountdown() {
  const now = new Date();
  const difference = LAUNCH_DATE.getTime() - now.getTime();

  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  if (difference <= 0) {
    if (daysElement) daysElement.textContent = "00";
    if (hoursElement) hoursElement.textContent = "00";
    if (minutesElement) minutesElement.textContent = "00";
    if (secondsElement) secondsElement.textContent = "00";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );
  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );
  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  if (daysElement) {
    daysElement.textContent = String(days).padStart(2, "0");
  }

  if (hoursElement) {
    hoursElement.textContent = String(hours).padStart(2, "0");
  }

  if (minutesElement) {
    minutesElement.textContent = String(minutes).padStart(2, "0");
  }

  if (secondsElement) {
    secondsElement.textContent = String(seconds).padStart(2, "0");
  }
}

// ========================================
// START WEBSITE
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  detectCountry();
  detectTimezone();

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
