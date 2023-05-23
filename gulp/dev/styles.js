'use strict';

const { src, dest, task } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const purgecss = require('gulp-purgecss');
const config = require('../../gulp-config');


task('dev:css', (d) => {
   src([                                            // Get all scss files
      `${config.paths.src}/assets/css/*.scss`,      // Include scss files
      `${config.paths.src}/assets/css/**/*.scss`,
      `!${config.paths.src}/assets/css/_*.scss`,    // Exclude files starting with _
      `!${config.paths.src}/assets/css/**/_*.scss`,
   ])
      .pipe(sass().on('error', sass.logError))           // Parse sass
      .pipe(concat({ path: 'app.css' }))                 // Concat all css files
      .pipe(purgecss({content: [`${config.paths.src}/**/*.html`]}))      // Remove unused css
      .pipe(dest(`${config.paths.dist}/assets/`));       // Output to dist folder
      
   console.log('----------------------------------------');
   console.log('🤖 DEV:');
   console.log(`📦 CSS minified! (find in /${config.paths.src}/assets)`);
   console.log('----------------------------------------');
   return d();                                                  // Done
});
