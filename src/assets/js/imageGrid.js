const images = [
   './assets/img/img_camera.png',
   './assets/img/img_code.png',
   './assets/img/img_drone.png',
   './assets/img/img_headphones.png',
   './assets/img/img_ipad.png',
   './assets/img/img_mac.png',
   './assets/img/img_macbook.png',
   './assets/img/img_tablet.png',
   './assets/img/img_typing.png',
   './assets/img/img_working.png',
]

function createImageElement(src) {
   var imageItem = document.createElement('div');
   imageItem.classList.add('image-item');

   var image = document.createElement('img');
   image.src = src;

   imageItem.appendChild(image);

   return imageItem;
}

function loadMore() {
   var imageGrid = document.getElementById('image_grid');

   // Duplicate each item in the images array
   images.forEach(function(src) {
      var imageItem = createImageElement(src);
      imageGrid.appendChild(imageItem);
   });
}

const loadMoreBtn = document.getElementById('image_grid_loadmore');
loadMoreBtn.addEventListener('click', loadMore);

loadMore();