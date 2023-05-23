'use strict';

const { src, dest, task } = require('gulp');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require("imagemin-pngquant");
const imagemin = require('gulp-imagemin');
const config = require('../../gulp-config');

task('build:img', async (d) => {
   console.log('----------------------------------------');
   console.log('🧱 BUILD:');
   console.log(`📷 OPTIMIZING IMAGES... PLEASE WAIT!`);
   console.log('----------------------------------------');
   
   src(`${config.paths.src}/assets/img/**/*`)    // Get all images
   .pipe(imagemin([                       // Optimize images:
      pngquant({ quality: [0.6, 0.8] }),     // PNG
      mozjpeg({ quality: 70 }),              // JPG
   ]))
   .pipe(dest(`${config.paths.build}/assets/img/`));    // Output to build folder
   
   console.log('----------------------------------------');
   console.log('🧱 BUILD:');
   console.log(`📷 Images optimized! (find in /${config.paths.build}/img)`);
   console.log('----------------------------------------');
   return d();                                   // Done
})
