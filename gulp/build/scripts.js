'use strict';

const { src, dest, task } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-terser');
const config = require('../../gulp-config');

task('build:js', (d) => {
   // Main js files
   src(`${config.paths.src}/assets/js/**/*.js`)           // Get all js files
      .pipe(concat({ path: 'app.js' }))   // Concat all js files
      .pipe(uglify())                     // Minify js
      .pipe(dest(`${config.paths.build}/assets/`));            // Output to dist folder

   // Node modules
   src(config.vendor)
      .pipe(concat({ path: 'vendor.js' }))   // Concat all js files
      .pipe(uglify())                        // Minify js
      .pipe(dest(`${config.paths.build}/`)); // Output to dist folder
      
   console.log('----------------------------------------');
   console.log('🧱 BUILD:');
   console.log(`📦 JS minified! (find in /${config.paths.build})`);
   console.log('----------------------------------------');
   return d();                                      // Done
})