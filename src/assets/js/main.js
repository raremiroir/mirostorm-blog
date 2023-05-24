
window.addEventListener('DOMContentLoaded', (event) => {
   console.log('DOM fully loaded and parsed')
})

// Hero height
const defineHeroHeight = () => {
   const heroImgGrid = document.querySelector('.hero__media--grid');
   const heroImgGridHeight = heroImgGrid.offsetHeight;
   console.log('heroImgGridHeight:', heroImgGridHeight);

   const heroMedia = document.querySelector('.hero__media');
   heroMedia.style.height = (heroImgGridHeight * 1.1) + 'px';

   return;
}
defineHeroHeight();
window.addEventListener('resize', () => {
   defineHeroHeight();
});