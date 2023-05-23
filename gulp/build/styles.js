'use strict';

const { src, dest, task } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const purgecss = require('gulp-purgecss');
const config = require('../../gulp-config');

task('build:css', (d) => {
   src(`${config.paths.src}/assets/css/**/*.scss`)  // Get all scss files
      .pipe(sass().on('error', sass.logError))      // Parse sass
      .pipe(concat({ path: 'app.css' }))            // Concat all css files
      .pipe(purgecss({                              // Purge unused css
         content: [`${config.paths.src}/**/*.html`],
      //    defaultExtractor: content => {
      //       const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
      //       const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
      //       return broadMatches.concat(innerMatches)
      //    }
      }))
      .pipe(dest(`${config.paths.build}/assets/`)); // Output to build folder
   d();                                             // Done
   console.log('----------------------------------------');
   console.log('🧱 BUILD:');
   console.log(`📦 CSS minified! (find in /${config.paths.build})`);
   console.log('----------------------------------------');

})