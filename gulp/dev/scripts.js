'use strict';

const { src, dest, task } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-terser');
const config = require('../../gulp-config');

task('dev:js', (d) => {
   // Main js files
   src(`${config.paths.src}/assets/js/**/*.js`)              // Get all js files
      .pipe(concat({ path: 'app.js' }))      // Concat all js files
      .pipe(dest(`${config.paths.dist}/assets/`));         // Output to dist folder

   // Node modules
   src(config.vendor)                        // Get all vendor js files
      .pipe(concat({ path: 'vendor.js' }))   // Concat all js files
      .pipe(dest(`${config.paths.dist}/`));                // Output to dist folder

      
   console.log('----------------------------------------');
   console.log('🤖 DEV:');
   console.log(`📦 JS minified! (find in /${config.paths.dist}`);
   console.log('----------------------------------------');
   return d();                                      // Done
});