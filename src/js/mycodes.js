import images from './gallery-items.js';
    // console.log(process.env.NODE_ENV);

const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const lightboxImgRef = document.querySelector('.lightbox__image');
const btnCloseLightboxRef = document.querySelector('button[data-action="close-lightbox"]');

    const arrayImgHTML = images.map(image => {
        const tagLi = document.createElement('li');
        const tagA = document.createElement('a');
        const tagImg = document.createElement('img');

        tagLi.classList.add('gallery__item');
        tagImg.classList.add('gallery__image');
        tagA.classList.add('gallery__link');
        tagA.href = image.original;
        tagImg.src = image.preview;
        tagImg.alt = image.description;
        tagImg.setAttribute('data-source', image.original);

        tagA.appendChild(tagImg);
        tagLi.appendChild(tagA);

        return tagLi;
    });
    galleryRef.append(...arrayImgHTML);
/* =============================================== */
/* відкриття модалки при кліку на фото */
const openBigImg = (event) => {
    if (event.target === event.currentTarget) {
        return;
    }
    const imageRef = event.target;
    const imageBigLink = imageRef.dataset.source;
    const imageBigAlt = imageRef.alt;
    lightboxImgRef.setAttribute('src', imageBigLink);
    lightboxImgRef.setAttribute('alt', imageBigAlt);
    toggleModal();
}
galleryRef.addEventListener('click', openBigImg);

/* закриття модалки при кліку на кнопку */
const closeBigImg = () => {
    lightboxImgRef.setAttribute('src', '');
    toggleModal();
}
btnCloseLightboxRef.addEventListener('click', closeBigImg);
/* =============================================== */
/* відключення переходу по посиланню в лінках */
const arrayGalleryLink = document.querySelectorAll('.gallery__link');
const stopDo = event => event.preventDefault();
arrayGalleryLink.forEach(link => link.addEventListener('click', stopDo));
/* =============================================== */
/* закриття модалки при кліку на бекдроп */
function onLightboxClick(event) {
    if (event.target === event.currentTarget) {
        toggleModal();
      };
};

const overlayRef = document.querySelector('.lightbox__overlay');
overlayRef.addEventListener('click', onLightboxClick);
/* =============================================== */
/* функція зміни наявності класу та події на клавіші ескейп */
  function toggleModal() {
    !lightboxRef.classList.contains("is-open")
      ? window.addEventListener('keydown', onPressEscape)
        : window.removeEventListener('keydown', onPressEscape);
    !lightboxRef.classList.contains("is-open")
      ? window.addEventListener('keydown', onPressLeftRight)
      : window.removeEventListener('keydown', onPressLeftRight);
    lightboxRef.classList.toggle("is-open");
  };
/* закриття модалки по клавіші ескейп */
  function onPressEscape(event) {
    if (event.code === 'Escape') {
      toggleModal();
    };
  };
/* =============================================== */
/* перемикання між фото клавішами вправо-вліво */
const arrayGalleryImg = document.querySelectorAll('.gallery__image');

function onPressLeftRight(event) {
    for (let i = 0; i < arrayGalleryImg.length; i += 1){
        if (lightboxImgRef.src === arrayGalleryImg[i].dataset.source && event.code === 'ArrowLeft') {
            if (i === 0) { i = arrayGalleryImg.length };
            lightboxImgRef.src = arrayGalleryImg[i - 1].dataset.source;
            lightboxImgRef.alt = arrayGalleryImg[i - 1].alt;
            return;
        };
        if (lightboxImgRef.src === arrayGalleryImg[i].dataset.source && event.code === 'ArrowRight') {
            if (i === arrayGalleryImg.length-1) { i = -1 };
            lightboxImgRef.src = arrayGalleryImg[i + 1].dataset.source;
            lightboxImgRef.alt = arrayGalleryImg[i + 1].alt;
            return;
        };
    };
  };
/* наступне фото по кліку на правій-лівій половині текущего фото */
const lightboxContentRef = document.querySelector('.lightbox__content');
const tagDivLeft = document.createElement('div');
const tagDivRight = document.createElement('div');
tagDivLeft.classList.add('div-left');
tagDivRight.classList.add('div-right');

// lightboxContentRef.append(tagDivLeft, tagDivRight);
lightboxContentRef.insertBefore(tagDivLeft, lightboxImgRef);
lightboxContentRef.insertBefore(tagDivRight, lightboxImgRef);

function onClickLeftRight(event) {
    for (let i = 0; i < arrayGalleryImg.length; i += 1){
        if (lightboxImgRef.src === arrayGalleryImg[i].dataset.source && event.currentTarget.classList.contains('div-left')) {
            if (i === 0) { i = arrayGalleryImg.length };
            lightboxImgRef.src = arrayGalleryImg[i - 1].dataset.source;
            lightboxImgRef.alt = arrayGalleryImg[i - 1].alt;
            return;
        };
        if (lightboxImgRef.src === arrayGalleryImg[i].dataset.source && event.currentTarget.classList.contains('div-right')) {
            if (i === arrayGalleryImg.length-1) { i = -1 };
            lightboxImgRef.src = arrayGalleryImg[i + 1].dataset.source;
            lightboxImgRef.alt = arrayGalleryImg[i + 1].alt;
            return;
        };
    };
  };

tagDivLeft.addEventListener('click', onClickLeftRight);
tagDivRight.addEventListener('click', onClickLeftRight);
/* ---------------------------------------------------- */