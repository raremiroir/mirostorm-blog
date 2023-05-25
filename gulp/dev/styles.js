'use strict';

const { src, dest, task } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const purgecss = require('gulp-purgecss');
const config = require('../../gulp-config');


task('dev:css', (d) => {

   console.log(`
            ----------------------------------------
            🤖 DEV:
            📦 Parsing/Purging Sass...
            📦 ... please wait ...
            ----------------------------------------
         `);

   src([
      `${config.paths.src}/assets/css/*.scss`,                 // Include scss files
      `${config.paths.src}/assets/css/**/*.scss`,
      `!${config.paths.src}/assets/css/_*.scss`,               // Exclude files starting with _
      `!${config.paths.src}/assets/css/**/_*.scss`,
   ])
      .pipe(sass().on('error', sass.logError))      // Parse sass
      .pipe(concat({ path: 'global.css' }))            // Concat all css files
      .pipe(purgecss({                              // Purge unused css
         content: [`${config.paths.src}/**/*.html`],
      }))
      .pipe(dest(`${config.paths.dist}/assets/`))   // Output to dist folder
      .on('end', () => {
         console.log(`
            ----------------------------------------
            🤖 DEV:
            📦 CSS parsed! (find in /${config.paths.dist}/assets/global.css)
            ----------------------------------------
         `);
         d();
      });
});