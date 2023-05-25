'use strict';

const { src, dest, task } = require('gulp');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require("imagemin-pngquant");
const imagemin = require('gulp-imagemin');
const config = require('../../gulp-config');


const qualities = {
   png: [0.6, 0.8],
   jpg: 70,
}

task('build:img', (d) => {

   console.log(`
            ----------------------------------------
            🧱 BUILD:
            📷 Optimizing Images...
            📷 ... please wait ...
            ----------------------------------------
   `);

   src([
      `${config.paths.dist}/assets/img/**/*`,   // Include images
   ])
      .pipe(imagemin([                          // Optimize images:
         pngquant({ quality: qualities.png }),   // PNG
         mozjpeg({ quality: qualities.jpg }),    // JPG
      ]))
      .pipe(dest(`${config.paths.build}/img/`)) // Output to build folder
      .on('end', () => {
         console.log(`
            ----------------------------------------
            🧱 BUILD:
            📷 Images optimized! (find in /${config.paths.build}/img)
            ----------------------------------------
         `);
         d();
      });
});