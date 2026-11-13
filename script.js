
document.addEventListener("DOMContentLoaded", () => {
  // =====================================
  // GTA 6 GLOBAL COUNTDOWN
  // =====================================

  // Launch date: November 19, 2026
  // Countdown is displayed using each visitor's local time.
  const LAUNCH_DATE = new Date("2026-11-19T00:00:00");

  // =====================================
  // GET VISITOR'S TIME ZONE
  // =====================================

  const timezone =
    Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown";

  // =====================================
  // DETECT COUNTRY FROM TIME ZONE
  // =====================================

  function getCountryFromTimezone(zone) {
    if (
      zone === "Asia/Kolkata" ||
      zone === "Asia/Calcutta"
    ) {
      return "India";
    }

    if (zone.startsWith("Europe/London")) {
      return "United Kingdom";
    }

    if (zone.startsWith("America/")) {
      return "United States";
    }

    if (zone.startsWith("Asia/Dubai")) {
      return "United Arab Emirates";
    }

    if (zone.startsWith("Asia/Tokyo")) {
      return "Japan";
    }

    if (zone.startsWith("Asia/Shanghai")) {
      return "China";
    }

    if (zone.startsWith("Asia/Singapore")) {
      return "Singapore";
    }

    if (zone.startsWith("Australia/")) {
      return "Australia";
    }

    if (zone.startsWith("Europe/Paris")) {
      return "France";
    }

    if (zone.startsWith("Europe/Berlin")) {
      return "Germany";
    }

    if (zone.startsWith("Europe/")) {
      return "Europe";
    }

    if (zone.startsWith("Africa/")) {
      return "Africa";
    }

    if (zone.startsWith("America/")) {
      return "Americas";
    }

    return "Your Region";
  }

  const country = getCountryFromTimezone(timezone);

  // =====================================
  // DISPLAY COUNTRY AND TIME ZONE
  // =====================================

  const countryElements = [
    document.getElementById("country"),
    document.getElementById("user-country"),
    document.getElementById("country-name")
  ].filter(Boolean);

  const timezoneElements = [
    document.getElementById("timezone"),
    document.getElementById("user-timezone"),
    document.getElementById("timezone-name")
  ].filter(Boolean);

  countryElements.forEach(element => {
    element.textContent = country;
  });

  timezoneElements.forEach(element => {
    element.textContent = timezone;
  });

  // =====================================
  // COUNTDOWN ELEMENTS
  // =====================================

  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  function updateCountdown() {
    const now = new Date();

    // Interpret the launch date as local midnight.
    const target = new Date(
      now.getFullYear(),
      10,
      19,
      0,
      0,
      0
    );

    // Use the configured launch year.
    target.setFullYear(2026);

    const difference = target.getTime() - now.getTime();

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

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // =====================================
  // FOOTER YEAR
  // =====================================

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  console.log("GTA 6 Countdown loaded");
  console.log("Detected time zone:", timezone);
  console.log("Detected country:", country);
});
