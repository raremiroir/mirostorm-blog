const images = [
   './assets/img/img_mac.png',
   './assets/img/img_macbook.png',
   './assets/img/img_tablet.png',
   './assets/img/img_typing.png',
   './assets/img/img_working.png',
]
const otherImages = [
   './assets/img/img_camera.png',
   './assets/img/img_code.png',
   './assets/img/img_drone.png',
   './assets/img/img_headphones.png',
   './assets/img/img_ipad.png',
]

const createImageElement = (src) => {
   var imageItem = document.createElement('div');
   imageItem.classList.add('img-wrap');

   var image = document.createElement('img');
   image.src = src;

   imageItem.appendChild(image);

   return imageItem;
}

const loadMoreBtn = document.getElementById('image_grid_loadmore');
const loadLessBtn = document.getElementById('image_grid_loadless');

let loadedImages = [];

const firstLoad = () => {
   var imageGrid = document.getElementById('image_grid');
   imageGrid.innerHTML = '';
   loadLessBtn.style.display = 'none';

   // Duplicate each item in the images array
   images.forEach(function(src) {
      var imageItem = createImageElement(src);
      imageGrid.appendChild(imageItem);
   });
   loadedImages = images;
}

const loadMore = () => {
   var imageGrid = document.getElementById('image_grid');
   if (!loadedImages.includes(otherImages[0])) {
      otherImages.forEach(function(src) {
         var imageItem = createImageElement(src);
         imageGrid.appendChild(imageItem);
      });
      loadedImages = [...loadedImages, ...otherImages];
   } else {
      loadedImages.forEach(function(src) {
         var imageItem = createImageElement(src);
         imageGrid.appendChild(imageItem);
      });
      loadedImages = [...loadedImages, ...loadedImages];
   }
   loadLessBtn.style.display = 'block';
}

loadMoreBtn.addEventListener('click', loadMore);
loadLessBtn.addEventListener('click', firstLoad);

firstLoad();