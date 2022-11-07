import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const createGalleryItems = createItemImage(galleryItems);

galleryEl.innerHTML = createGalleryItems;

// const galleryLinkEl = document.querySelector(".gallery__link");

// galleryLinkEl.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("click");
// });

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

  openModal(targetEl);
}

function openModal(element) {
  const instance = basicLightbox.create(`
    <img src="${element.dataset.source}" width="800" height="600">
`);

  instance.show();

  closeModal(instance);
}

function closeModal(instance) {
  galleryEl.addEventListener("keydown", (event) => {
    instance;
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
