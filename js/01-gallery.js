import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const galleryItemEl = document.querySelector(".gallery__item");

const galleryItemsMarcup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
    <div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
    `
  )
  .join("");
console.log(galleryItemsMarcup);

galleryEl.insertAdjacentHTML("beforeend", galleryItemsMarcup);

galleryEl.addEventListener("click", onGalleryElClick);

function onGalleryElClick(e) {
  e.preventDefault();
  if (e.target.classList.contains("gallery__image")) {
    const instance = basicLightbox.create(`

       <div class="modal">
          <img src="${e.target.dataset.source}" width="800" height="600"
       </div >`);
    console.log(instance.src);
    instance.show();
  }
}
