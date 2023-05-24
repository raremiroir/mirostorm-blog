
window.addEventListener('DOMContentLoaded', (event) => {
   console.log('DOM fully loaded and parsed')
})

// Hero height
const defineHeroHeight = () => {
   const heroImgGrid = document.querySelector('.hero__media--grid');
   $(".hero__media").css("height", ((heroImgGrid.offsetHeight * 1.1) + 'px'));
   return;
}
defineHeroHeight();
$(window).resize(function () { 
   defineHeroHeight();
});