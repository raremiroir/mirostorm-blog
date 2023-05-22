'use strict';

const { src, dest, task } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');

task('dev:css', (d) => {
   const tailwindcss = require('tailwindcss');
   const autoprefixer = require('autoprefixer');
   src(`src/assets/css/**/*.scss`)                       // Get all scss files
      .pipe(sass().on('error', sass.logError))           // Parse sass
      .pipe(postcss([tailwindcss(), autoprefixer()]))    // Parse tailwindcss + autoprefixer
      .pipe(concat({ path: 'app.css' }))                 // Concat all css files
      .pipe(dest(`public/assets/`));                     // Output to dist folder
   d();                                                  // Done
   
   console.log('----------------------------------------');
   console.log('🤖 DEV:');
   console.log('📦 CSS minified! (find in /public/dist)');
   console.log('----------------------------------------');
});
