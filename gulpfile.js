const gulp = require('gulp');
const connect = require('gulp-connect');
const concat = require('gulp-concat');

const browserSync = require('browser-sync').create();


const basePath = './public/';


// Live preview server
const livePreview = (done) => {
   browserSync.init({
      server: {
         baseDir: basePath,
         port: 3000,
      }
   });
   done();
}
// Trigger reload from browser
const reloadPreview = (done) => {
   console.log('Reloading...');
   browserSync.reload();
   done();
}
gulp.task('dev', livePreview);



// Parse
const gen = {
   // CSS
   css: () => {
      const tailwindcss = require('tailwindcss');
      const autoprefixer = require('autoprefixer');
      return src(basePath + 'assets/css/*.scss')
         .pipe(sass().on('error', sass.logError))
         .pipe(postcss([tailwindcss(), autoprefixer()]))
         .pipe(concat({ path: 'style.css' }))
         .pipe(dest(basePath + 'assets/css/'));
   }
}







exports.default = dev;