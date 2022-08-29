import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

// 1 Створити розмітку Галереї +

// 2 Повісити прослуховування на gallery (Делегувати) +
// 2,1 Заборонити перехід за змовчуванням по link +
// 2,2 Отримати url модалки +

// 3 Підключити модалку через бібліотеку +

// Реалізувати закриття модалки по Ескейпу +

// СТВОРЮЮ РОЗМІТКУ .......
const creatGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      ` <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> `
  )
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", creatGallery);

// Вішаю прослуховування Клік по картинкам
galleryEl.addEventListener("click", onClickGalleryImg);

function onClickGalleryImg(e) {
  e.preventDefault();
  if (!e.target === "IMG") {
    return;
  }

  let UrlImgModal = e.target.dataset.source;

  modal(UrlImgModal);
}

// МОДАЛКА ............=

function modal(srcImg) {
  const incert = basicLightbox.create(
    `
  	<img src="${srcImg}">
  `
  );

  showModal(incert);
  addClosModalEvent(incert);
}

// Відкриття модалки
function showModal(element) {
  element.show();
}

// ЗАКРИТТЯ МОДАЛКИ
// Функція яка чипляє прослуховування при відкритті МОДАЛКИ
function addClosModalEvent(element) {
  document.addEventListener("keydown", onTargetKeybordEsc, { once: Boolean });

  //Функція що закриває модалку при натискані по ESC
  function onTargetKeybordEsc(event) {
    if (event.code === "Escape") {
      element.close();
    }
  }
}
