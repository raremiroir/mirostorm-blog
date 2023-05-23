'use strict';

const { src, dest, task } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-terser');

task('build:js', (d) => {
   // Main js files
   src('src/assets/js/**/*.js')           // Get all js files
      .pipe(concat({ path: 'app.js' }))   // Concat all js files
      .pipe(uglify())                     // Minify js
      .pipe(dest('./build/'));            // Output to dist folder

   // Node modules
   src([                                  // Get required modules
      'node_modules/iconify-icon/dist/iconify-icon.min.js',
   ])
      .pipe(concat({ path: 'vendor.js' }))// Concat all js files
      .pipe(uglify())                     // Minify js
      .pipe(dest('./build/'));            // Output to dist folder
      
   d();                                   // Done
   
   console.log('----------------------------------------');
   console.log('🧱 BUILD:');
   console.log('📦 JS minified! (find in /build)');
   console.log('----------------------------------------');
})