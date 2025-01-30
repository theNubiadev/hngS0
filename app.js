function updateTime() {
    const utcTime  = new Date().toUTCString();
    document.getElementById("utc-time").textContent = utcTime;
   }
   updateTime();
   setInterval(updateTime, 1000);