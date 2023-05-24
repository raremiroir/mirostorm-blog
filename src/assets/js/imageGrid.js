const images = [
   './assets/img/img_mac.png',
   './assets/img/img_macbook.png',
   './assets/img/img_tablet.png',
   './assets/img/img_working.png',
   './assets/img/img_camera.png',
   './assets/img/img_code.png',
]
const otherImages = [
   './assets/img/img_typing.png',
   './assets/img/img_drone.png',
   './assets/img/img_macbook.png',
   './assets/img/img_headphones.png',
   './assets/img/img_working.png',
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

let loadedImages = [];

const firstLoad = () => {
   $('#image_grid').html("");
   $('#image_grid_loadless').hide();

   // Iterate initial images + append
   images.forEach(function(src) {
      $('#image_grid').append(createImageElement(src));
   });
   loadedImages = images;
}

const loadMore = () => {
   if (!loadedImages.includes(otherImages[0])) {
      // Iterate rest of images + append
      otherImages.forEach(function(src) {
         $('#image_grid').append(createImageElement(src));
      });
      loadedImages = [...loadedImages, ...otherImages];
   } else {
      // Duplicate images + append
      loadedImages.forEach(function(src) {
         $('#image_grid').append(createImageElement(src));
      });
      loadedImages = [...loadedImages, ...loadedImages];
   }
   // Show load less button
   $('#image_grid_loadless').show();
}

$('#image_grid_loadmore').click(() => loadMore())
$('#image_grid_loadless').click(() => firstLoad())


firstLoad();