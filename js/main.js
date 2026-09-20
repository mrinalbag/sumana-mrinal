/* ============================================================
   MAIN — language, preloader, header, reveals, parallax, marquee
   ============================================================ */

const { I18N, MEDIA, MAPS, MAPS_EMBED, SHARE } = window;
window.SITE_KEY = document.body.dataset.site || null; // "wedding" | "reception" | null (gateway)
const SITE_KEY = window.SITE_KEY;

/* ---------- i18n ---------- */
const getLang = () => localStorage.getItem("sm-lang") || "en";

function t(key) {
  const lang = getLang();
  const [scope, k] = key.includes(".") ? key.split(".") : ["common", key];
  const dict = (I18N[lang] && I18N[lang][scope]) || {};
  return dict[k] ?? I18N.en[scope]?.[k] ?? key;
}

function applyLanguage() {
  const lang = getLang();
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-site]").forEach((el) => {
    el.textContent = t(`${SITE_KEY}.${el.dataset.i18nSite}`);
  });
  const toggle = document.getElementById("lang-toggle");
  if (toggle) toggle.textContent = lang === "en" ? "বাংলা" : "EN";
  buildMarquee();
  initShare();
}

function toggleLanguage() {
  localStorage.setItem("sm-lang", getLang() === "en" ? "bn" : "en");
  applyLanguage();
}

/* ---------- marquee ---------- */
function buildMarquee() {
  const tracks = document.querySelectorAll(".marquee-track");
  if (!tracks.length) return;
  const items = t("marquee");
  const group = items
    .concat(items, items)
    .map((txt) => `<span class="marquee-item">${txt}<span class="star">✦</span></span>`)
    .join("");
  tracks.forEach((track) => (track.innerHTML = group + group));
}

/* ---------- preloader ---------- */
function runPreloader() {
  const pre = document.getElementById("preloader");
  if (!pre) {
    document.body.classList.add("loaded");
    return;
  }
  const bar = pre.querySelector(".preloader-bar span");
  const pct = pre.querySelector(".preloader-pct");
  let p = 0;
  const id = setInterval(() => {
    p = Math.min(100, p + Math.ceil(Math.random() * 9));
    bar.style.width = p + "%";
    pct.textContent = p + "%";
    if (p >= 100) {
      clearInterval(id);
      setTimeout(() => {
        document.body.classList.add("loaded");
        setTimeout(() => pre.remove(), 1100);
      }, 450);
    }
  }, 90);
  setTimeout(() => document.body.classList.add("loaded"), 5000); // failsafe
}

/* ---------- header ---------- */
function initHeader() {
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  document.getElementById("lang-toggle")?.addEventListener("click", toggleLanguage);
}

/* ---------- scroll reveals ---------- */
function initReveals() {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

/* ---------- hero parallax ---------- */
function initParallax() {
  const media = document.querySelector(".hero-media");
  const content = document.querySelector(".hero-content");
  if (!media) return;
  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    media.style.transform = `translate3d(0, ${y * 0.22}px, 0)`;
    if (content) content.style.opacity = Math.max(0, 1 - y / (window.innerHeight * 0.72));
    ticking = false;
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );
}

/* ---------- hero media from config ---------- */
function initHeroMedia() {
  if (!SITE_KEY) return;
  const base = "../";
  const video = document.getElementById("hero-video");
  if (video) {
    video.src = base + MEDIA.videos[SITE_KEY];
    video.poster = base + MEDIA.posters[SITE_KEY];
  }
  const mapBtn = document.getElementById("venue-map-btn");
  if (mapBtn) mapBtn.href = MAPS[SITE_KEY];
  const mapFrame = document.getElementById("venue-map-frame");
  if (mapFrame) mapFrame.src = MAPS_EMBED[SITE_KEY];
}

/* ---------- WhatsApp share ---------- */
function initShare() {
  const lang = getLang();
  const scope = SITE_KEY || "gateway";
  const text = (SHARE[scope] && SHARE[scope][lang]) || SHARE[scope].en;
  const url = encodeURIComponent(window.location.href);
  document.querySelectorAll(".wa-share").forEach((a) => {
    a.href = `https://wa.me/?text=${encodeURIComponent(text + "\n")}${url}`;
    const label = a.querySelector("span:last-child");
    if (label) label.textContent = SHARE.cta[lang] || SHARE.cta.en;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage();
  initHeroMedia();
  initShare();
  runPreloader();
  initHeader();
  initReveals();
  initParallax();
});
