'use strict';

const { src, dest, task } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-terser');
const config = require('../../gulp-config');

task('dev:js', (d) => {

   console.log(`
            ----------------------------------------
            🤖 DEV:
            📦 Parsing JS...
            📦 ... please wait ...
            ----------------------------------------
         `);
   
   src(`${config.paths.src}/assets/js/**/*`)       // Get all images
      .pipe(concat({ path: 'main.js' }))            // Concat all js files
      .pipe(dest(`${config.paths.dist}/assets/`))  // Output to dist folder
      .on('end', () => {
         console.log(`
            ----------------------------------------
            🤖 DEV:
            📦 Parsing Vendor Files...
            📦 ... please wait ...
            ----------------------------------------
         `);

         src(config.vendor)                              // Get all vendor files
            .pipe(concat({ path: 'vendor.js' }))         // Concat all js files
            .pipe(uglify())                              // Uglify js
            .pipe(dest(`${config.paths.dist}/assets/`))  // Output to dist folder
            .on('end', () => {
               console.log(`
            ----------------------------------------
            🤖 DEV:
            📦 JS parsed! (find in /${config.paths.build}/assets/main.js)
            📦 Vendor JS parsed! (find in /${config.paths.build}/assets/vendor.js)
            ----------------------------------------
               `);
               d();
            });
      });
});