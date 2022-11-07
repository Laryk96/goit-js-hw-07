import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const collection = createItemImage(galleryItems);

galleryEl.innerHTML = collection;

galleryEl.addEventListener("click", onImageClick);

function createItemImage(items) {
  return items
    .map(({ preview, original, description }) => {
      return ` <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

function onImageClick(event) {
  event.preventDefault();

  const tagEl = event.target.nodeName;

  if (tagEl !== "IMG") {
    return;
  }

  interactivForGallery();
}

function interactivForGallery() {
  const settiongsLightbox = {
    captions: true,
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  };

  const lightbox = new SimpleLightbox(".gallery__item", settiongsLightbox);
}
