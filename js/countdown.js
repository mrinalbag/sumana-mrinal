/* ============================================================
   COUNTDOWN — animated golden numerals
   ============================================================ */

const { DATES } = window;
const CD_SITE = window.SITE_KEY;

function initCountdown() {
  const root = document.getElementById("countdown");
  if (!root || !CD_SITE) return;
  const target = new Date(DATES[CD_SITE]).getTime();
  const pad = (n) => String(n).padStart(2, "0");
  const values = {};

  function update() {
    const diff = Math.max(0, target - Date.now());
    const now = {
      days: pad(Math.floor(diff / 86400000)),
      hours: pad(Math.floor(diff / 3600000) % 24),
      minutes: pad(Math.floor(diff / 60000) % 60),
      seconds: pad(Math.floor(diff / 1000) % 60),
    };
    Object.entries(now).forEach(([unit, val]) => {
      if (values[unit] === val) return;
      values[unit] = val;
      const el = root.querySelector(`[data-cd="${unit}"] .cd-value`);
      if (!el) return;
      el.textContent = val;
      el.classList.remove("tick");
      void el.offsetWidth; // restart animation
      el.classList.add("tick");
    });
  }

  update();
  setInterval(update, 1000);
}

document.addEventListener("DOMContentLoaded", initCountdown);
