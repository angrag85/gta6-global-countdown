
"use strict";

// ============================================
// GTA 6 GLOBAL COUNTDOWN
// ============================================

const LAUNCH_DATE = new Date("2026-11-19T00:00:00");

// ============================================
// COUNTRY NAME AND FLAG HELPERS
// ============================================

function countryFlag(code) {
  return code
    .toUpperCase()
    .split("")
    .map(letter =>
      String.fromCodePoint(127397 + letter.charCodeAt(0))
    )
    .join("");
}

function countryName(code) {
  const names = new Intl.DisplayNames(["en"], {
    type: "region"
  });

  return names.of(code) || code;
}

// ============================================
// LOAD WORLDWIDE TIMEZONE DATABASE
// ============================================

async function loadTimezoneCountries() {
  const sources = [
    "https://raw.githubusercontent.com/eggert/tz/main/zone.tab",
    "https://raw.githubusercontent.com/eggert/tz/main/zone1970.tab"
  ];

  for (const source of sources) {
    try {
      const response = await fetch(source, {
        cache: "no-store"
      });

      if (!response.ok) continue;

      const text = await response.text();
      const mapping = {};

      text.split(/\r?\n/).forEach(line => {
        if (!line || line.startsWith("#")) return;

        const columns = line.split("\t");

        if (columns.length < 3) return;

        const countryCodes = columns[0].split(",");
        const timezone = columns[2];

        if (!mapping[timezone] && countryCodes[0]) {
          mapping[timezone] = countryCodes[0].toUpperCase();
        }
      });

      if (Object.keys(mapping).length > 0) {
        return mapping;
      }
    } catch (error) {
      console.warn("Timezone database source failed:", source);
    }
  }

  throw new Error("Could not load timezone database");
}

// ============================================
// DETECT SELECTED TIMEZONE AND COUNTRY
// ============================================

async function detectCountry() {
  const countryElement = document.getElementById("country");

  if (!countryElement) {
    console.error('Missing element: id="country"');
    return;
  }

  countryElement.textContent = "🌍 Detecting country...";

  const timezone =
    Intl.DateTimeFormat().resolvedOptions().timeZone;

  try {
    const timezoneCountries = await loadTimezoneCountries();

    let code = timezoneCountries[timezone];

    // Handle common timezone aliases
    const aliases = {
      "Asia/Calcutta": "Asia/Kolkata",
      "Europe/Kiev": "Europe/Kyiv",
      "America/Godthab": "America/Nuuk"
    };

    if (!code && aliases[timezone]) {
      code = timezoneCountries[aliases[timezone]];
    }

    if (!code) {
      countryElement.textContent =
        "🌍 Country not identified";
      console.warn("Timezone not found:", timezone);
      return;
    }

    const flag = countryFlag(code);
    const name = countryName(code);

    countryElement.textContent = `${flag} ${name}`;

    console.log("Detected timezone:", timezone);
    console.log("Detected country:", name);
    console.log("Detected country code:", code);

  } catch (error) {
    console.error("Country detection error:", error);

    countryElement.textContent =
      "🌍 Country unavailable";
  }
}

// ============================================
// DISPLAY TIMEZONE
// ============================================

function detectTimezone() {
  const timezoneElement =
    document.getElementById("timezone");

  const timezone =
    Intl.DateTimeFormat().resolvedOptions().timeZone;

  if (timezoneElement) {
    timezoneElement.textContent =
      timezone || "Unknown timezone";
  }
}

// ============================================
// COUNTDOWN TIMER
// ============================================

function updateCountdown() {
  const now = new Date();

  const difference =
    LAUNCH_DATE.getTime() - now.getTime();

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

  const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
  );

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
    daysElement.textContent =
      String(days).padStart(2, "0");
  }

  if (hoursElement) {
    hoursElement.textContent =
      String(hours).padStart(2, "0");
  }

  if (minutesElement) {
    minutesElement.textContent =
      String(minutes).padStart(2, "0");
  }

  if (secondsElement) {
    secondsElement.textContent =
      String(seconds).padStart(2, "0");
  }
}

// ============================================
// START WEBSITE
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  detectCountry();
  detectTimezone();

  updateCountdown();

  setInterval(updateCountdown, 1000);
});
