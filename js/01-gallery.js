import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

galleryEl.innerHTML = createItemImage(galleryItems);

galleryEl.addEventListener("click", onImageClick);

function createItemImage(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join("");
}

function onImageClick(event) {
  event.preventDefault();

  const targetEl = event.target;
  const tagEl = event.target.nodeName;

  if (tagEl !== "IMG") {
    return;
  }

  toggleModalGallery(targetEl);
}

function toggleModalGallery(element) {
  const instance = basicLightbox.create(`
    <img src="${element.dataset.source}" width="800" height="600">
`);

  instance.show();

  window.addEventListener("keydown", closeModal);

  function closeModal(event) {
    if (!basicLightbox.visible()) {
      return;
    }
    if (event.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", closeModal);
    }
  }
}
