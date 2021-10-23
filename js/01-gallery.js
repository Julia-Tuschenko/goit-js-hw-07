import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
galleryRef.addEventListener('click', galleryTemplate);
galleryRef.addEventListener( 'click', function(e) {
    e.preventDefault();
 }, false);

function galleryTemplate(){
    const markup = galleryItems
    .map(
        ({preview, original, description}) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
    )
    .join("");
    galleryRef.insertAdjacentHTML('beforeend', markup);

};

galleryTemplate();


galleryRef.addEventListener('click', onClickImgGallery);

function onClickImgGallery(evt){
const img = evt.target.dataset.source;
const instance = basicLightbox.create(`
    <img src="${img}" width="800" height="600">
`);

instance.show();
};


// console.log(galleryRef);


// window.addEventListener('keydown',(event) =>{
//     if(event.code === `Escape`){
//        return onclick;
//     };
// });

    
    // function onProject(event){
    //     if(event('.basicLightbox')){
    //         window.addEventListener('keydown',(event) =>{
    //             if(event.code === `Escape`){
                    
    //             };
    //         });
    //     }
    // }




































// galleryRef.addEventListener('click', onModalGallery);

// function onModalGallery(evt){


// //     const modal = basicLightbox.create(`
// //     <div class="modal">
// //         <p>
// //             Your first lightbox with just a few lines of code.
// //             Yes, it's really that simple.
// //         </p>
// //     </div>
// // `)

// //     return modal.show();
// }

// console.log(galleryRef);














// const img = event.target.getAttribute('data-source');

// const img = event.target.dataset.source;
// const instance = basicLightbox.create(`
//     <img src="data-source" width="800" height="600">
// `);
// instance.show();



// const instance = basicLightbox.create(galleryRef, {
//     onShow: (instance) => {
//         instance.element().querySelector('img').onclick = instance.close
//     }
    
// })

// instance.show()




// const galleryTemplate = galleryItems
//  .map(
//      (el, index) =>
//      ` <div class="gallery__item">
//              <a class="gallery__link" href="${el.original}">
//                  <img
//                      class="gallery__image"
//                      src="${el.preview}"
//                      data-source="${el.original}"
//                      alt="${el.description}"
//                  />
//              </a>
//          </div>;`
//     )
//     .join("");

//     // console.log(galleryTemplate);

//     galleryRef.insertAdjacentHTML('beforeend', galleryTemplate);
//     console.log(galleryRef);



//  data-index="${index}"











// const galleryTemplate = galleryItems
//  .map(
//      (el, index) =>
//      ` <div class="gallery__item">
//              <a class="gallery__link" href="${el.original}">
//                  <img
//                      class="gallery__image"
//                      src="${el.preview}"
//                      data-source="${el.original}"
//                      data-index="${index}"
//                      alt="${el.description}"
//                  />
//              </a>
//          </div>;`
//     )
//     .join("");

// galleryRef.insertAdjacentHTML('beforeend', galleryTemplate);
// console.log(galleryRef);

// const instance = basicLightbox.create(galleryRef, {
//     onShow: (instance) => {
//         instance.element().querySelector('img').onclick = instance.close
//     }
    
// })

// instance.show()















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




