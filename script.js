
document.addEventListener("DOMContentLoaded", () => {
  detectCountry();
  detectTimezone();
  updateCountdown();
  setInterval(updateCountdown, 1000);
});

// ==================================
// COUNTRY NAME + FLAG
// ==================================

async function detectCountry() {
  const countryElement = document.getElementById("country");

  if (!countryElement) {
    console.error('Missing HTML element: id="country"');
    return;
  }

  countryElement.textContent = "🌍 Detecting country...";

  try {
    let countryName = "";
    let countryCode = "";

    // First country detection service
    try {
      const response = await fetch("https://ipwho.is/", {
        cache: "no-store"
      });

      if (!response.ok) throw new Error("First service failed");

      const data = await response.json();

      if (data.success && data.country_code && data.country) {
        countryName = data.country;
        countryCode = data.country_code;
      } else {
        throw new Error("No country returned");
      }
    } catch (error) {
      console.warn("Trying backup country service...");
    }

    // Backup country detection service
    if (!countryCode) {
      const response = await fetch("https://ipapi.co/json/", {
        cache: "no-store"
      });

      if (!response.ok) throw new Error("Backup service failed");

      const data = await response.json();

      countryName = data.country_name;
      countryCode = data.country_code;
    }

    if (!countryName || !countryCode) {
      throw new Error("Country information unavailable");
    }

    countryCode = countryCode.toUpperCase();

    // Exclude Pakistan
    if (countryCode === "PK") {
      countryElement.textContent = "🌍 Other Region";
      return;
    }

    // Create country flag emoji
    const flag = countryCode
      .split("")
      .map(letter =>
        String.fromCodePoint(127397 + letter.charCodeAt(0))
      )
      .join("");

    // Display flag and country name together
    countryElement.textContent = `${flag} ${countryName}`;

    console.log("Country detected:", countryName, countryCode);

  } catch (error) {
    console.error("Country detection failed:", error);
    countryElement.textContent = "🌍 Country unavailable";
  }
}

// ==================================
// TIMEZONE
// ==================================

function detectTimezone() {
  const timezoneElement = document.getElementById("timezone");

  if (!timezoneElement) return;

  const timezone =
    Intl.DateTimeFormat().resolvedOptions().timeZone;

  timezoneElement.textContent = timezone || "Unknown";
}

// ==================================
// GTA 6 COUNTDOWN
// ==================================

const LAUNCH_DATE = new Date("2026-11-19T00:00:00");

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

  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);

  if (daysElement) daysElement.textContent = String(days).padStart(2, "0");
  if (hoursElement) hoursElement.textContent = String(hours).padStart(2, "0");
  if (minutesElement) minutesElement.textContent = String(minutes).padStart(2, "0");
  if (secondsElement) secondsElement.textContent = String(seconds).padStart(2, "0");
}
