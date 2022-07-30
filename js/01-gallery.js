import { galleryItems } from "./gallery-items.js";

// Change code below this line  original

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const imgList = galleryItems.reduce((acc, item) => {
  return (
    /* html*/
    acc +
    `<div class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" data-source='${item.original}' src='${item.preview}' alt='${item.description}'/></a></div>`
  );
}, "");

gallery.innerHTML = imgList;

function clickImg(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;
  const instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}" width="800" height="600">
      `);
  instance.show();

  console.log(e);
  window.addEventListener("keyup", (e) => {
    if (instance.visible() && e.keyCode === 27) {
      instance.close();
      console.log(e.code);
      //27
    }
  });
}

gallery.addEventListener("click", clickImg);
