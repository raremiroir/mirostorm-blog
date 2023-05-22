'use strict';

const { src, dest, task } = require('gulp');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require("imagemin-pngquant");
const imagemin = require('gulp-imagemin');

task('build:img', (d) => {
   src(`src/assets/img/**/*`)    // Get all images
   .pipe(imagemin([                       // Optimize images:
      pngquant({ quality: [0.6, 0.8] }),     // PNG
      mozjpeg({ quality: 70 }),              // JPG
   ]))
   .pipe(dest(`build/img/`));    // Output to build folder
   d();                                   // Done
   
   console.log('----------------------------------------');
   console.log('🧱 BUILD:');
   console.log('📷 Images optimized! (find in /build/img)');
   console.log('----------------------------------------');
})
