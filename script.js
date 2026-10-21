const photos = [
  "WhatsApp Image 2026-10-21 at 7.27.52 PM.jpeg",
  "WhatsApp Image 2026-10-21 at 7.27.53 PM.jpeg",
  "WhatsApp Image 2026-10-21 at 7.27.53 PM (1).jpeg",
  "WhatsApp Image 2026-10-21 at 7.27.53 PM (2).jpeg",
  "WhatsApp Image 2026-10-21 at 7.27.54 PM.jpeg",
  "WhatsApp Image 2026-10-21 at 7.27.54 PM (1).jpeg",
  "WhatsApp Image 2026-10-21 at 7.27.54 PM (2).jpeg",
  "WhatsApp Image 2026-10-21 at 7.27.55 PM.jpeg",
  "WhatsApp Image 2026-10-21 at 7.27.55 PM (1).jpeg",
  "WhatsApp Image 2026-10-21 at 7.27.56 PM.jpeg",
  "WhatsApp Image 2026-10-21 at 7.27.56 PM (1).jpeg",
  "WhatsApp Image 2026-10-21 at 7.27.56 PM (2).jpeg",
  "WhatsApp Image 2026-10-21 at 7.28.00 PM.jpeg",
  "WhatsApp Image 2026-10-21 at 7.28.00 PM (1).jpeg",
  "WhatsApp Image 2026-10-21 at 7.28.00 PM (2).jpeg",
  "WhatsApp Image 2026-10-21 at 7.28.01 PM.jpeg",
  "WhatsApp Image 2026-10-21 at 7.28.01 PM (1).jpeg",
  "WhatsApp Image 2026-10-21 at 7.28.01 PM (2).jpeg",
  "WhatsApp Image 2026-10-21 at 7.28.02 PM.jpeg",
  "WhatsApp Image 2026-10-21 at 7.28.02 PM (1).jpeg",
  "WhatsApp Image 2026-10-21 at 7.28.02 PM (2).jpeg",
  "WhatsApp Image 2026-10-21 at 7.28.05 PM.jpeg",
  "WhatsApp Image 2026-10-21 at 7.28.05 PM (1).jpeg",
  "WhatsApp Image 2026-10-21 at 7.28.05 PM (2).jpeg",
  "WhatsApp Image 2026-10-21 at 7.30.42 PM.jpeg",
  "WhatsApp Image 2026-10-21 at 7.30.43 PM.jpeg",
  "WhatsApp Image 2026-10-21 at 7.30.43 PM (1).jpeg",
  "WhatsApp Image 2026-10-21 at 7.30.43 PM (2).jpeg",
  "WhatsApp Image 2026-10-21 at 7.30.43 PM (3).jpeg",
  "WhatsApp Image 2026-10-21 at 7.30.44 PM.jpeg",
];

const captions = [
  "a little moment, a lot of love",
  "your smile is contagious",
  "main-character energy",
  "simply lovely, as always",
  "one of my favorite people",
  "you make every picture better",
  "a whole lot of sunshine",
];

const photoGrid = document.querySelector("#photo-grid");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
let activePhotoIndex = 0;

function photoPath(filename) {
  return `photos/${encodeURIComponent(filename)}`;
}

photos.forEach((filename, index) => {
  const button = document.createElement("button");
  button.className = "photo-card";
  button.type = "button";
  button.setAttribute("aria-label", `Open photo ${index + 1}: ${captions[index % captions.length]}`);

  const image = document.createElement("img");
  image.src = photoPath(filename);
  image.alt = `Photo ${index + 1} — ${captions[index % captions.length]}`;
  image.loading = "lazy";
  image.decoding = "async";

  const caption = document.createElement("span");
  caption.textContent = captions[index % captions.length];

  button.append(image, caption);
  button.addEventListener("click", () => openLightbox(index));
  photoGrid.append(button);
});

function showPhoto(index) {
  activePhotoIndex = (index + photos.length) % photos.length;
  lightboxImage.src = photoPath(photos[activePhotoIndex]);
  lightboxImage.alt = `Photo ${activePhotoIndex + 1} — ${captions[activePhotoIndex % captions.length]}`;
  lightboxCaption.textContent = `${captions[activePhotoIndex % captions.length]} · ${activePhotoIndex + 1} / ${photos.length}`;
}

function openLightbox(index) {
  showPhoto(index);
  lightbox.showModal();
}

document.querySelector("#lightbox-close").addEventListener("click", () => lightbox.close());
document.querySelector("#lightbox-prev").addEventListener("click", () => showPhoto(activePhotoIndex - 1));
document.querySelector("#lightbox-next").addEventListener("click", () => showPhoto(activePhotoIndex + 1));
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});
document.addEventListener("keydown", (event) => {
  if (!lightbox.open) return;
  if (event.key === "ArrowLeft") showPhoto(activePhotoIndex - 1);
  if (event.key === "ArrowRight") showPhoto(activePhotoIndex + 1);
});

const noteMessages = [
  "You are so, so loved. Thank you for being exactly who you are — the world (and my world) is better with you in it.",
  "You deserve all the kindness you give everyone else. Never forget how wonderfully special you are.",
  "No matter how busy life gets, I’ll always be cheering you on. You’ve got this — and you’ve got me.",
];
let noteIndex = 0;
document.querySelector("#note-button").addEventListener("click", () => {
  noteIndex = (noteIndex + 1) % noteMessages.length;
  document.querySelector("#note-message").textContent = noteMessages[noteIndex];
});
