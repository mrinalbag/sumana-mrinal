/* ============================================================
   GALLERY — grid build + lightbox with soft zoom
   ============================================================ */

const { GALLERY: RAW_GALLERY } = window;
const G_BASE = window.SITE_KEY ? "../" : "./";
const GALLERY = RAW_GALLERY.map((p) => ({ ...p, src: G_BASE + p.src, thumb: G_BASE + p.thumb }));

let lbIndex = null;

function buildGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;
  grid.innerHTML = GALLERY.map(
    (photo, i) => `
      <figure class="gallery-item reveal" style="--d:${(i % 4) * 0.08}s" data-testid="gallery-photo-${i}" data-index="${i}">
        <img src="${photo.thumb}" alt="${photo.alt}" loading="lazy">
      </figure>`
  ).join("");
  grid.querySelectorAll(".gallery-item").forEach((fig) =>
    fig.addEventListener("click", () => openLightbox(+fig.dataset.index))
  );
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.1 }
  );
  grid.querySelectorAll(".gallery-item").forEach((fig) => io.observe(fig));
}

function openLightbox(i) {
  lbIndex = i;
  const lb = document.getElementById("lightbox");
  renderLightbox();
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
  lbIndex = null;
}

function navLightbox(dir) {
  lbIndex = (lbIndex + dir + GALLERY.length) % GALLERY.length;
  renderLightbox();
}

function renderLightbox() {
  const photo = GALLERY[lbIndex];
  const img = document.getElementById("lb-image");
  img.src = photo.src;
  img.alt = photo.alt;
  document.getElementById("lb-counter").textContent = `${lbIndex + 1} / ${GALLERY.length}`;
}

function initLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  document.getElementById("lb-close").addEventListener("click", closeLightbox);
  document.getElementById("lb-prev").addEventListener("click", (e) => { e.stopPropagation(); navLightbox(-1); });
  document.getElementById("lb-next").addEventListener("click", (e) => { e.stopPropagation(); navLightbox(1); });
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (lbIndex === null) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") navLightbox(1);
    if (e.key === "ArrowLeft") navLightbox(-1);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildGallery();
  initLightbox();
});
