import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const galleryTemplate = galleryItems
 .map(
     (el, index) =>
     ` <div class="gallery__item">
             <a class="gallery__link" href="${el.original}">
                 <img
                     class="gallery__image"
                     src="${el.preview}"
                     data-source="${el.original}"
                     data-index="${index}"
                     alt="${el.description}"
                 />
             </a>
         </div>;`
    )
    .join("");

galleryRef.insertAdjacentHTML('beforeend', galleryTemplate);
console.log(galleryRef);

const instance = basicLightbox.create(galleryRef, {
    onShow: (instance) => {
        instance.element().querySelector('img').onclick = instance.close
    }
    
})

instance.show()















// function galleryTemplate(cards){
//     return galleryItems.map((el, index) => {
//         return `
//         <div class="gallery__item">
//             <a class="gallery__link" href="${el.original}">
//                 <img
//                     class="gallery__image"
//                     src="${el.preview}"
//                     data-source="${original}"
//                     data-index="${index}"
//                     alt="${el.description}"
//                 />
//             </a>
//         </div>;`;
//     }
//     )
//     .join("");

   
     
// }




