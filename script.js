(() => {
  const cfg = window.GTA6_CONFIG || {};
  const $ = id => document.getElementById(id);
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  const locale = navigator.language || "en";
  const countryCode = (locale.split("-")[1] || "").toUpperCase();
  const regionNames = new Intl.DisplayNames([locale], {type:"region"});
  const country = countryCode ? (regionNames.of(countryCode) || countryCode) : "Your region";
  const flags = countryCode.length === 2 ? String.fromCodePoint(...[...countryCode].map(c=>127397+c.charCodeAt(0))) : "🌍";
  $("flag").textContent = flags;
  $("country").textContent = country;
  $("timezone").textContent = tz;
  const target = cfg.releaseOverrides && cfg.releaseOverrides[tz]
    ? new Date(cfg.releaseOverrides[tz])
    : new Date(`${cfg.releaseDate || "2026-11-19T00:00:00"}`);
  $("local-date").textContent = new Intl.DateTimeFormat(locale,{dateStyle:"full",timeStyle:"short",timeZone:tz}).format(target);
  const pad = n => String(n).padStart(2,"0");
  function tick(){
    let ms = target.getTime() - Date.now();
    if(ms <= 0){
      $("days").textContent="00";$("hours").textContent="00";$("minutes").textContent="00";$("seconds").textContent="00";
      $("status").textContent="The scheduled local launch time has arrived. Check your platform for availability.";
      return;
    }
    const d=Math.floor(ms/86400000);ms%=86400000;
    const h=Math.floor(ms/3600000);ms%=3600000;
    const m=Math.floor(ms/60000);const s=Math.floor((ms%60000)/1000);
    $("days").textContent=pad(d);$("hours").textContent=pad(h);$("minutes").textContent=pad(m);$("seconds").textContent=pad(s);
  }
  tick();setInterval(tick,1000);
  const id=(cfg.youtubeVideoId||"").trim();
  if(id){
    $("youtube-player").src=`https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=0`;
    $("youtube-player").hidden=false;$("video-placeholder").hidden=true;
  }
})();