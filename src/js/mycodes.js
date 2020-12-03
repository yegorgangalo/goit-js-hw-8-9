import images from './gallery-items.js';

    console.log(process.env.NODE_ENV);

    const galleryRef = document.querySelector('.js-gallery');

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

// export default () => {
// }









//     let qwerty = 1;

//     const higherOrderFunction = () => {
//         let num = 'a';
//         const manyConsoleLogs = (wer) => {
//             num += wer;
//             qwerty += 2;
//             console.log(num);
//             console.log(qwerty);
//         };

//         return {
//             manyConsoleLogs
//         };
//     };
//     const func1 = higherOrderFunction();
//     func1.manyConsoleLogs('b');
//     func1.manyConsoleLogs('c');
//     func1.manyConsoleLogs('d');
//     func1.manyConsoleLogs('e');
//     func1.manyConsoleLogs('f');

//     const func2 = higherOrderFunction();
//     func2.manyConsoleLogs('g');
//     func2.manyConsoleLogs('h');
    /* -------------------------- */