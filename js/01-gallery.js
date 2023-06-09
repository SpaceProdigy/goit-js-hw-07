import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function addImages() {
  const addImg = galleryItems
    .map(
      (el) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${el.original}">
              <img class="gallery__image" src="${el.preview}" data-source="${el.original}" alt="${el.description}" />
            </a>
          </li>`
    )
    .join("");
  galleryEl.innerHTML = addImg;
}

addImages();

galleryEl.addEventListener("click", openModal);

function openModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const modlaWindow = basicLightbox.create(`
      <img src="${e.target.dataset.source}" width="800" height="600">
  `);

  modlaWindow.show();

  galleryEl.addEventListener("keydown", closeModal);

  function closeModal(e) {
    if (e.key === "Escape") {
      modlaWindow.close();
      galleryEl.removeEventListener("keydown", closeModal);
    }
  }
}
