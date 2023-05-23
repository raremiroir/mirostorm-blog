'use strict';

const { src, dest, task } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-terser');

task('dev:js', (d) => {
   // Main js files
   src(`src/assets/js/**/*.js`)              // Get all js files
      .pipe(concat({ path: 'app.js' }))      // Concat all js files
      .pipe(dest(`public/assets/`));         // Output to dist folder

   // Node modules
   src([                                     // Get required modules
      'node_modules/iconify-icon/dist/iconify-icon.min.js',
   ])
      .pipe(concat({ path: 'vendor.js' }))   // Concat all js files
      .pipe(dest(`public/`));                // Output to dist folder

   d();                                      // Done
   
   console.log('----------------------------------------');
   console.log('🤖 DEV:');
   console.log('📦 JS minified! (find in /public/dist)');
   console.log('----------------------------------------');
});