'use strict';

const { src, dest, task } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');
const purgecss = require('gulp-purgecss');

task('dev:css', (d) => {
   // const tailwindcss = require('tailwindcss');
   // const autoprefixer = require('autoprefixer');
   src([                                                 // Get all scss files
      `src/assets/css/*.scss`,                              // Include scss files
      `src/assets/css/**/*.scss`,
      `!src/assets/css/_*.scss`,                            // Exclude files starting with _
      `!src/assets/css/**/_*.scss`,
   ])
      .pipe(sass().on('error', sass.logError))           // Parse sass
      // .pipe(postcss([tailwindcss(), autoprefixer()]))    // Parse tailwindcss + autoprefixer
      .pipe(concat({ path: 'app.css' }))                 // Concat all css files
      .pipe(purgecss({content: [`src/**/*.html`]}))      // Remove unused css
      .pipe(dest(`public/assets/`));                     // Output to dist folder
   d();                                                  // Done
   
   console.log('----------------------------------------');
   console.log('🤖 DEV:');
   console.log('📦 CSS minified! (find in /public/dist)');
   console.log('----------------------------------------');
});
