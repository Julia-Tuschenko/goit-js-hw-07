import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
galleryRef.addEventListener('click', galleryTemplate);
galleryRef.addEventListener( 'click', function(e) {
    e.preventDefault();
 }, false);

console.log(galleryRef);

function galleryTemplate(){
    const markup = galleryItems
    .map(
        ({preview, original, description}) =>
        `<li>
            <div class="gallery__item">
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}"/>
                </a>
            </div>
        </li>`
    )
    .join("");
    galleryRef.insertAdjacentHTML('beforeend', markup);
};

galleryTemplate();

const lightbox = new SimpleLightbox('.gallery a', { captionsData : "alt", captionDelay : 250});
lightbox.on("show.simplelightbox");
// console.log(lightbox);