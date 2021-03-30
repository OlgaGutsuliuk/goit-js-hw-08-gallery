import gallery from './default.js'

const galleryList = document.querySelector('.js-gallery')
const galleryModal = document.querySelector('.js-lightbox')
const bigPicture = document.querySelector('.lightbox__image')

gallery.forEach(el=>{
 const listRef = `<li class="gallery__item">
<a
  class="gallery__link"
  href="${el.original}"
>
  <img
    class="gallery__image"
    src="${el.preview}"
    data-source="${el.original}"
    alt="${el.description}"
  />
</a>
</li>` 
galleryList.insertAdjacentHTML('beforeend', listRef)
});



const makeMarkupModal = (e)=>{
e.preventDefault();
if(e.target.nodeName!== 'IMG'){
return
}
bigPicture.src = e.target.dataset.source;
bigPicture.alt = e.target.alt
onModalOpen();
}

const onModalOpen = ()=>{
  galleryModal.classList.add('is-open')
}

const closeModal = (e)=>{
if(e.target===bigPicture){
  return
}
galleryModal.classList.remove('is-open')
bigPicture.src = "";
bigPicture.alt = "";
}




galleryList.addEventListener('click', makeMarkupModal)
galleryModal.addEventListener('click', closeModal);


































