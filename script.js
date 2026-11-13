
document.addEventListener("DOMContentLoaded", () => {

  // =====================================
  // GTA 6 COUNTDOWN SETTINGS
  // =====================================

  const LAUNCH_YEAR = 2026;
  const LAUNCH_MONTH = 10;
  const LAUNCH_DAY = 19;

  // =====================================
  // AUTOMATIC TIME ZONE DETECTION
  // =====================================

  const timezone =
    Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown";

  // =====================================
  // COUNTRY DETECTION
  // =====================================

  function getCountryFromTimezone(zone) {

    // INDIA
    if (
      zone === "Asia/Kolkata" ||
      zone === "Asia/Calcutta"
    ) return "India";

    // UNITED KINGDOM
    if (zone === "Europe/London") return "United Kingdom";

    // GERMANY
    if (zone === "Europe/Berlin" ||
        zone === "Europe/Busingen") return "Germany";

    // RUSSIA
    if (
      zone.startsWith("Europe/Moscow") ||
      zone.startsWith("Europe/Kaliningrad") ||
      zone.startsWith("Europe/Samara") ||
      zone.startsWith("Asia/Yekaterinburg") ||
      zone.startsWith("Asia/Omsk") ||
      zone.startsWith("Asia/Novosibirsk") ||
      zone.startsWith("Asia/Krasnoyarsk") ||
      zone.startsWith("Asia/Irkutsk") ||
      zone.startsWith("Asia/Chita") ||
      zone.startsWith("Asia/Vladivostok") ||
      zone.startsWith("Asia/Magadan") ||
      zone.startsWith("Asia/Kamchatka") ||
      zone.startsWith("Asia/Sakhalin") ||
      zone.startsWith("Asia/Anadyr")
    ) return "Russia";

    // CHINA
    if (
      zone === "Asia/Shanghai" ||
      zone === "Asia/Chongqing" ||
      zone === "Asia/Harbin" ||
      zone === "Asia/Urumqi"
    ) return "China";

    // USA
    if (
      zone.startsWith("America/") &&
      !zone.startsWith("America/Toronto") &&
      !zone.startsWith("America/Vancouver") &&
      !zone.startsWith("America/Edmonton") &&
      !zone.startsWith("America/Winnipeg") &&
      !zone.startsWith("America/Halifax") &&
      !zone.startsWith("America/St_Johns") &&
      !zone.startsWith("America/Montreal")
    ) return "United States";

    // PAKISTAN EXCLUDED
    if (zone === "Asia/Karachi") return "Other Region";

    // OTHER COUNTRIES
    const countryMap = {
      "Asia/Tokyo": "Japan",
      "Asia/Seoul": "South Korea",
      "Asia/Dubai": "United Arab Emirates",
      "Asia/Riyadh": "Saudi Arabia",
      "Asia/Dhaka": "Bangladesh",
      "Asia/Kathmandu": "Nepal",
      "Asia/Singapore": "Singapore",
      "Asia/Bangkok": "Thailand",
      "Asia/Jakarta": "Indonesia",
      "Asia/Kuala_Lumpur": "Malaysia",
      "Asia/Manila": "Philippines",

      "Europe/Paris": "France",
      "Europe/Rome": "Italy",
      "Europe/Madrid": "Spain",
      "Europe/Amsterdam": "Netherlands",
      "Europe/Zurich": "Switzerland",
      "Europe/Vienna": "Austria",
      "Europe/Brussels": "Belgium",
      "Europe/Stockholm": "Sweden",
      "Europe/Oslo": "Norway",
      "Europe/Copenhagen": "Denmark",
      "Europe/Helsinki": "Finland",
      "Europe/Warsaw": "Poland",
      "Europe/Athens": "Greece",
      "Europe/Istanbul": "Turkey",

      "Africa/Cairo": "Egypt",
      "Africa/Johannesburg": "South Africa",
      "Africa/Lagos": "Nigeria",
      "Africa/Nairobi": "Kenya",

      "Australia/Sydney": "Australia",
      "Australia/Melbourne": "Australia",
      "Australia/Perth": "Australia",
      "Pacific/Auckland": "New Zealand",

      "America/Sao_Paulo": "Brazil",
      "America/Argentina/Buenos_Aires": "Argentina",
      "America/Mexico_City": "Mexico",
      "America/Toronto": "Canada",
      "America/Vancouver": "Canada",
      "America/Edmonton": "Canada",
      "America/Winnipeg": "Canada",
      "America/Halifax": "Canada",
      "America/St_Johns": "Canada"
    };

    if (countryMap[zone]) return countryMap[zone];

    // FALLBACK FOR OTHER RECOGNISED TIME ZONES
    if (zone.startsWith("Europe/")) return "Other European Region";
    if (zone.startsWith("Asia/")) return "Other Asian Region";
    if (zone.startsWith("America/")) return "Other American Region";
    if (zone.startsWith("Africa/")) return "Other African Region";
    if (zone.startsWith("Australia/")) return "Australia";
    if (zone.startsWith("Pacific/")) return "Pacific Region";
    if (zone.startsWith("Indian/")) return "Indian Ocean Region";

    return "Other Region";
  }

  const country = getCountryFromTimezone(timezone);

  // =====================================
  // SHOW COUNTRY AND TIME ZONE
  // =====================================

  ["country", "user-country", "country-name"].forEach(id => {
    const element = document.getElementById(id);
    if (element) element.textContent = country;
  });

  ["timezone", "user-timezone", "timezone-name"].forEach(id => {
    const element = document.getElementById(id);
    if (element) element.textContent = timezone;
  });

  // =====================================
  // COUNTDOWN TIMER
  // =====================================

  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  function updateCountdown() {

    const now = new Date();

    const target = new Date(
      LAUNCH_YEAR,
      LAUNCH_MONTH,
      LAUNCH_DAY,
      0, 0, 0
    );

    const difference = target.getTime() - now.getTime();

    if (difference <= 0) {
      if (daysElement) daysElement.textContent = "00";
      if (hoursElement) hoursElement.textContent = "00";
      if (minutesElement) minutesElement.textContent = "00";
      if (secondsElement) secondsElement.textContent = "00";
      return;
    }

    const days = Math.floor(difference / 86400000);
    const hours = Math.floor((difference / 3600000) % 24);
    const minutes = Math.floor((difference / 60000) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    if (daysElement) daysElement.textContent = String(days).padStart(2, "0");
    if (hoursElement) hoursElement.textContent = String(hours).padStart(2, "0");
    if (minutesElement) minutesElement.textContent = String(minutes).padStart(2, "0");
    if (secondsElement) secondsElement.textContent = String(seconds).padStart(2, "0");
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
  console.log("Visitor timezone:", timezone);
  console.log("Visitor country:", country);

});
