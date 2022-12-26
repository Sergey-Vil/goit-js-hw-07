import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryItemsMarcup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
  
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
 
    `
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", galleryItemsMarcup);

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
