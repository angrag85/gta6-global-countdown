
const COUNTRIES = [
  // ASIA
  ["Asia/Kolkata", "India", "🇮🇳"],
  ["Asia/Dubai", "United Arab Emirates", "🇦🇪"],
  ["Asia/Riyadh", "Saudi Arabia", "🇸🇦"],
  ["Asia/Tokyo", "Japan", "🇯🇵"],
  ["Asia/Shanghai", "China", "🇨🇳"],
  ["Asia/Hong_Kong", "Hong Kong", "🇭🇰"],
  ["Asia/Singapore", "Singapore", "🇸🇬"],
  ["Asia/Dhaka", "Bangladesh", "🇧🇩"],
  ["Asia/Kathmandu", "Nepal", "🇳🇵"],
  ["Asia/Colombo", "Sri Lanka", "🇱🇰"],
  ["Asia/Karachi", "Pakistan", "🇵🇰"],
  ["Asia/Kabul", "Afghanistan", "🇦🇫"],
  ["Asia/Tehran", "Iran", "🇮🇷"],
  ["Asia/Baghdad", "Iraq", "🇮🇶"],
  ["Asia/Jerusalem", "Israel", "🇮🇱"],
  ["Asia/Seoul", "South Korea", "🇰🇷"],
  ["Asia/Pyongyang", "North Korea", "🇰🇵"],
  ["Asia/Bangkok", "Thailand", "🇹🇭"],
  ["Asia/Jakarta", "Indonesia", "🇮🇩"],
  ["Asia/Makassar", "Indonesia", "🇮🇩"],
  ["Asia/Jayapura", "Indonesia", "🇮🇩"],
  ["Asia/Pontianak", "Indonesia", "🇮🇩"],
  ["Asia/Manila", "Philippines", "🇵🇭"],
  ["Asia/Kuala_Lumpur", "Malaysia", "🇲🇾"],
  ["Asia/Taipei", "Taiwan", "🇹🇼"],
  ["Asia/Yangon", "Myanmar", "🇲🇲"],
  ["Asia/Ho_Chi_Minh", "Vietnam", "🇻🇳"],
  ["Asia/Phnom_Penh", "Cambodia", "🇰🇭"],
  ["Asia/Vientiane", "Laos", "🇱🇦"],
  ["Asia/Ulaanbaatar", "Mongolia", "🇲🇳"],
  ["Asia/Tashkent", "Uzbekistan", "🇺🇿"],
  ["Asia/Almaty", "Kazakhstan", "🇰🇿"],
  ["Asia/Bishkek", "Kyrgyzstan", "🇰🇬"],
  ["Asia/Dushanbe", "Tajikistan", "🇹🇯"],
  ["Asia/Ashgabat", "Turkmenistan", "🇹🇲"],
  ["Asia/Yerevan", "Armenia", "🇦🇲"],
  ["Asia/Baku", "Azerbaijan", "🇦🇿"],
  ["Asia/Tbilisi", "Georgia", "🇬🇪"],
  ["Asia/Amman", "Jordan", "🇯🇴"],
  ["Asia/Beirut", "Lebanon", "🇱🇧"],
  ["Asia/Damascus", "Syria", "🇸🇾"],
  ["Asia/Muscat", "Oman", "🇴🇲"],
  ["Asia/Qatar", "Qatar", "🇶🇦"],
  ["Asia/Kuwait", "Kuwait", "🇰🇼"],
  ["Asia/Bahrain", "Bahrain", "🇧🇭"],
  ["Asia/Aden", "Yemen", "🇾🇪"],
  ["Asia/Gaza", "Palestine", "🇵🇸"],
  ["Asia/Thimphu", "Bhutan", "🇧🇹"],
  ["Asia/Brunei", "Brunei", "🇧🇳"],
  ["Asia/Nicosia", "Cyprus", "🇨🇾"],
  ["Asia/Dili", "Timor-Leste", "🇹🇱"],
  ["Indian/Maldives", "Maldives", "🇲🇻"],

  // EUROPE
  ["Europe/London", "United Kingdom", "🇬🇧"],
  ["Europe/Dublin", "Ireland", "🇮🇪"],
  ["Europe/Paris", "France", "🇫🇷"],
  ["Europe/Berlin", "Germany", "🇩🇪"],
  ["Europe/Rome", "Italy", "🇮🇹"],
  ["Europe/Madrid", "Spain", "🇪🇸"],
  ["Europe/Amsterdam", "Netherlands", "🇳🇱"],
  ["Europe/Brussels", "Belgium", "🇧🇪"],
  ["Europe/Zurich", "Switzerland", "🇨🇭"],
  ["Europe/Vienna", "Austria", "🇦🇹"],
  ["Europe/Prague", "Czechia", "🇨🇿"],
  ["Europe/Warsaw", "Poland", "🇵🇱"],
  ["Europe/Stockholm", "Sweden", "🇸🇪"],
  ["Europe/Oslo", "Norway", "🇳🇴"],
  ["Europe/Copenhagen", "Denmark", "🇩🇰"],
  ["Europe/Helsinki", "Finland", "🇫🇮"],
  ["Europe/Athens", "Greece", "🇬🇷"],
  ["Europe/Lisbon", "Portugal", "🇵🇹"],
  ["Europe/Moscow", "Russia", "🇷🇺"],
  ["Asia/Yekaterinburg", "Russia", "🇷🇺"],
  ["Asia/Novosibirsk", "Russia", "🇷🇺"],
  ["Asia/Vladivostok", "Russia", "🇷🇺"],
  ["Asia/Kamchatka", "Russia", "🇷🇺"],
  ["Europe/Kyiv", "Ukraine", "🇺🇦"],
  ["Europe/Bucharest", "Romania", "🇷🇴"],
  ["Europe/Budapest", "Hungary", "🇭🇺"],
  ["Europe/Sofia", "Bulgaria", "🇧🇬"],
  ["Europe/Belgrade", "Serbia", "🇷🇸"],
  ["Europe/Zagreb", "Croatia", "🇭🇷"],
  ["Europe/Sarajevo", "Bosnia and Herzegovina", "🇧🇦"],
  ["Europe/Skopje", "North Macedonia", "🇲🇰"],
  ["Europe/Tirane", "Albania", "🇦🇱"],
  ["Europe/Podgorica", "Montenegro", "🇲🇪"],
  ["Europe/Vilnius", "Lithuania", "🇱🇹"],
  ["Europe/Riga", "Latvia", "🇱🇻"],
  ["Europe/Tallinn", "Estonia", "🇪🇪"],
  ["Europe/Minsk", "Belarus", "🇧🇾"],
  ["Europe/Reykjavik", "Iceland", "🇮🇸"],
  ["Europe/Luxembourg", "Luxembourg", "🇱🇺"],
  ["Europe/Monaco", "Monaco", "🇲🇨"],
  ["Europe/Malta", "Malta", "🇲🇹"],
  ["Europe/Andorra", "Andorra", "🇦🇩"],
  ["Europe/San_Marino", "San Marino", "🇸🇲"],
  ["Europe/Vatican", "Vatican City", "🇻🇦"],
  ["Europe/Istanbul", "Turkey", "🇹🇷"],
  ["Europe/Chisinau", "Moldova", "🇲🇩"],
  ["Europe/Vaduz", "Liechtenstein", "🇱🇮"],

  // NORTH AMERICA
  ["America/New_York", "United States", "🇺🇸"],
  ["America/Detroit", "United States", "🇺🇸"],
  ["America/Chicago", "United States", "🇺🇸"],
  ["America/Denver", "United States", "🇺🇸"],
  ["America/Los_Angeles", "United States", "🇺🇸"],
  ["America/Phoenix", "United States", "🇺🇸"],
  ["America/Anchorage", "United States", "🇺🇸"],
  ["Pacific/Honolulu", "United States", "🇺🇸"],
  ["America/Indiana/Indianapolis", "United States", "🇺🇸"],
  ["America/Boise", "United States", "🇺🇸"],

  ["America/Toronto", "Canada", "🇨🇦"],
  ["America/Vancouver", "Canada", "🇨🇦"],
  ["America/Edmonton", "Canada", "🇨🇦"],
  ["America/Winnipeg", "Canada", "🇨🇦"],
  ["America/Halifax", "Canada", "🇨🇦"],
  ["America/St_Johns", "Canada", "🇨🇦"],
  ["America/Regina", "Canada", "🇨🇦"],
  ["America/Yellowknife", "Canada", "🇨🇦"],
  ["America/Iqaluit", "Canada", "🇨🇦"],

  ["America/Mexico_City", "Mexico", "🇲🇽"],
  ["America/Cancun", "Mexico", "🇲🇽"],
  ["America/Tijuana", "Mexico", "🇲🇽"],
  ["America/Guatemala", "Guatemala", "🇬🇹"],
  ["America/Belize", "Belize", "🇧🇿"],
  ["America/Tegucigalpa", "Honduras", "🇭🇳"],
  ["America/Managua", "Nicaragua", "🇳🇮"],
  ["America/Costa_Rica", "Costa Rica", "🇨🇷"],
  ["America/Panama", "Panama", "🇵🇦"],
  ["America/Havana", "Cuba", "🇨🇺"],
  ["America/Jamaica", "Jamaica", "🇯🇲"],
  ["America/Santo_Domingo", "Dominican Republic", "🇩🇴"],
  ["America/Port-au-Prince", "Haiti", "🇭🇹"],
  ["America/Puerto_Rico", "Puerto Rico", "🇵🇷"],
  ["America/El_Salvador", "El Salvador", "🇸🇻"],
  ["America/Antigua", "Antigua and Barbuda", "🇦🇬"],
  ["America/Nassau", "Bahamas", "🇧🇸"],
  ["America/Barbados", "Barbados", "🇧🇧"],
  ["America/Dominica", "Dominica", "🇩🇲"],
  ["America/Grenada", "Grenada", "🇬🇩"],
  ["America/St_Kitts", "Saint Kitts and Nevis", "🇰🇳"],
  ["America/St_Lucia", "Saint Lucia", "🇱🇨"],
  ["America/St_Vincent", "Saint Vincent and the Grenadines", "🇻🇨"],
  ["America/Port_of_Spain", "Trinidad and Tobago", "🇹🇹"],

  // SOUTH AMERICA
  ["America/Sao_Paulo", "Brazil", "🇧🇷"],
  ["America/Manaus", "Brazil", "🇧🇷"],
  ["America/Rio_Branco", "Brazil", "🇧🇷"],
  ["America/Belem", "Brazil", "🇧🇷"],
  ["America/Fortaleza", "Brazil", "🇧🇷"],
  ["America/Argentina/Buenos_Aires", "Argentina", "🇦🇷"],
  ["America/Argentina/Cordoba", "Argentina", "🇦🇷"],
  ["America/Santiago", "Chile", "🇨🇱"],
  ["America/Bogota", "Colombia", "🇨🇴"],
  ["America/Lima", "Peru", "🇵🇪"],
  ["America/Caracas", "Venezuela", "🇻🇪"],
  ["America/Guayaquil", "Ecuador", "🇪🇨"],
  ["America/La_Paz", "Bolivia", "🇧🇴"],
  ["America/Asuncion", "Paraguay", "🇵🇾"],
  ["America/Montevideo", "Uruguay", "🇺🇾"],
  ["America/Paramaribo", "Suriname", "🇸🇷"],
  ["America/Guyana", "Guyana", "🇬🇾"],

  // AFRICA
  ["Africa/Cairo", "Egypt", "🇪🇬"],
  ["Africa/Johannesburg", "South Africa", "🇿🇦"],
  ["Africa/Lagos", "Nigeria", "🇳🇬"],
  ["Africa/Nairobi", "Kenya", "🇰🇪"],
  ["Africa/Casablanca", "Morocco", "🇲🇦"],
  ["Africa/Algiers", "Algeria", "🇩🇿"],
  ["Africa/Tunis", "Tunisia", "🇹🇳"],
  ["Africa/Tripoli", "Libya", "🇱🇾"],
  ["Africa/Khartoum", "Sudan", "🇸🇩"],
  ["Africa/Juba", "South Sudan", "🇸🇸"],
  ["Africa/Addis_Ababa", "Ethiopia", "🇪🇹"],
  ["Africa/Dar_es_Salaam", "Tanzania", "🇹🇿"],
  ["Africa/Kampala", "Uganda", "🇺🇬"],
  ["Africa/Kigali", "Rwanda", "🇷🇼"],
  ["Africa/Accra", "Ghana", "🇬🇭"],
  ["Africa/Abidjan", "Ivory Coast", "🇨🇮"],
  ["Africa/Dakar", "Senegal", "🇸🇳"],
  ["Africa/Maputo", "Mozambique", "🇲🇿"],
  ["Africa/Harare", "Zimbabwe", "🇿🇼"],
  ["Africa/Lusaka", "Zambia", "🇿🇲"],
  ["Africa/Gaborone", "Botswana", "🇧🇼"],
  ["Africa/Windhoek", "Namibia", "🇳🇦"],
  ["Africa/Luanda", "Angola", "🇦🇴"],
  ["Africa/Monrovia", "Liberia", "🇱🇷"],
  ["Africa/Freetown", "Sierra Leone", "🇸🇱"],
  ["Africa/Bamako", "Mali", "🇲🇱"],
  ["Africa/Niamey", "Niger", "🇳🇪"],
  ["Africa/Ndjamena", "Chad", "🇹🇩"],
  ["Africa/Douala", "Cameroon", "🇨🇲"],
  ["Africa/Libreville", "Gabon", "🇬🇦"],
  ["Africa/Brazzaville", "Republic of the Congo", "🇨🇬"],
  ["Africa/Kinshasa", "Democratic Republic of the Congo", "🇨🇩"],
  ["Africa/Antananarivo", "Madagascar", "🇲🇬"],
  ["Africa/Mogadishu", "Somalia", "🇸🇴"],
  ["Africa/Djibouti", "Djibouti", "🇩🇯"],
  ["Africa/Asmara", "Eritrea", "🇪🇷"],
  ["Africa/Bujumbura", "Burundi", "🇧🇮"],
  ["Africa/Porto-Novo", "Benin", "🇧🇯"],
  ["Africa/Lome", "Togo", "🇹🇬"],
  ["Africa/Ouagadougou", "Burkina Faso", "🇧🇫"],
  ["Africa/Bangui", "Central African Republic", "🇨🇫"],
  ["Africa/Malabo", "Equatorial Guinea", "🇬🇶"],
  ["Africa/Sao_Tome", "Sao Tome and Principe", "🇸🇹"],
  ["Africa/Blantyre", "Malawi", "🇲🇼"],
  ["Africa/Maseru", "Lesotho", "🇱🇸"],
  ["Africa/Mbabane", "Eswatini", "🇸🇿"],
  ["Africa/Banjul", "Gambia", "🇬🇲"],
  ["Africa/Conakry", "Guinea", "🇬🇳"],
  ["Africa/Guinea-Bissau", "Guinea-Bissau", "🇬🇼"],
  ["Africa/Nouakchott", "Mauritania", "🇲🇷"],
  ["Africa/El_Aaiun", "Western Sahara", "🇪🇭"],
  ["Atlantic/Cape_Verde", "Cabo Verde", "🇨🇻"],
  ["Indian/Comoro", "Comoros", "🇰🇲"],
  ["Indian/Mauritius", "Mauritius", "🇲🇺"],
  ["Indian/Mahe", "Seychelles", "🇸🇨"],

  // OCEANIA
  ["Australia/Sydney", "Australia", "🇦🇺"],
  ["Australia/Melbourne", "Australia", "🇦🇺"],
  ["Australia/Brisbane", "Australia", "🇦🇺"],
  ["Australia/Perth", "Australia", "🇦🇺"],
  ["Australia/Adelaide", "Australia", "🇦🇺"],
  ["Australia/Darwin", "Australia", "🇦🇺"],
  ["Australia/Hobart", "Australia", "🇦🇺"],
  ["Australia/Lord_Howe", "Australia", "🇦🇺"],

  ["Pacific/Auckland", "New Zealand", "🇳🇿"],
  ["Pacific/Chatham", "New Zealand", "🇳🇿"],
  ["Pacific/Fiji", "Fiji", "🇫🇯"],
  ["Pacific/Port_Moresby", "Papua New Guinea", "🇵🇬"],
  ["Pacific/Guadalcanal", "Solomon Islands", "🇸🇧"],
  ["Pacific/Noumea", "New Caledonia", "🇳🇨"],
  ["Pacific/Apia", "Samoa", "🇼🇸"],
  ["Pacific/Tongatapu", "Tonga", "🇹🇴"],
  ["Pacific/Tarawa", "Kiribati", "🇰🇮"],
  ["Pacific/Kiritimati", "Kiribati", "🇰🇮"],
  ["Pacific/Majuro", "Marshall Islands", "🇲🇭"],
  ["Pacific/Palau", "Palau", "🇵🇼"],
  ["Pacific/Chuuk", "Micronesia", "🇫🇲"],
  ["Pacific/Nauru", "Nauru", "🇳🇷"],
  ["Pacific/Funafuti", "Tuvalu", "🇹🇻"],
  ["Pacific/Efate", "Vanuatu", "🇻🇺"],
  ["Pacific/Pago_Pago", "American Samoa", "🇦🇸"],
  ["Pacific/Rarotonga", "Cook Islands", "🇨🇰"],
  ["Pacific/Niue", "Niue", "🇳🇺"],

  // ADDITIONAL US TERRITORY
  ["America/Guam", "Guam", "🇬🇺"],
  ["America/Saipan", "Northern Mariana Islands", "🇲🇵"],
  ["America/Adak", "United States", "🇺🇸"],
  ["America/Metlakatla", "United States", "🇺🇸"]
];
";
  }

  console.log("Selected timezone:", timezone);
  console.log("Country result:", match || "No match");
}

// ============================================
// COUNTDOWN
// ============================================

function updateCountdown() {
  const now = new Date();
  const difference = LAUNCH_DATE - now;

  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  if (difference <= 0) {
    if (days) days.textContent = "00";
    if (hours) hours.textContent = "00";
    if (minutes) minutes.textContent = "00";
    if (seconds) seconds.textContent = "00";
    return;
  }

  if (days) {
    days.textContent = String(
      Math.floor(difference / 86400000)
    ).padStart(2, "0");
  }

  if (hours) {
    hours.textContent = String(
      Math.floor((difference % 86400000) / 3600000)
    ).padStart(2, "0");
  }

  if (minutes) {
    minutes.textContent = String(
      Math.floor((difference % 3600000) / 60000)
    ).padStart(2, "0");
  }

  if (seconds) {
    seconds.textContent = String(
      Math.floor((difference % 60000) / 1000)
    ).padStart(2, "0");
  }
}

// ============================================
// START WEBSITE
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  detectCountry();
  updateCountdown();

  setInterval(updateCountdown, 1000);
});
