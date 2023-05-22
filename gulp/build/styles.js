'use strict';

const { src, dest, task } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');

task('build:css', (d) => {
   const tailwindcss = require('tailwindcss');
   const autoprefixer = require('autoprefixer');
   const cssnano = require('cssnano');
   src(`src/assets/css/**/*.scss`)              // Get all scss files
      .pipe(sass().on('error', sass.logError))  // Parse sass
      .pipe(postcss([                           // Parse tailwindcss + autoprefixer
         tailwindcss(),
            autoprefixer(),
            cssnano()
         ]))
      // .pipe(purgecss({                          // Purge unused css
      //    content: [`src/**/*.html`],
      //    defaultExtractor: content => {
      //       const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
      //       const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
      //       return broadMatches.concat(innerMatches)
      //    }
      // }))
      .pipe(concat({ path: 'app.css' }))        // Concat all css files
      .pipe(dest(`build/`));           // Output to build folder
   d();                                         // Done
   console.log('----------------------------------------');
   console.log('🧱 BUILD:');
   console.log('📦 CSS minified! (find in /build)');
   console.log('----------------------------------------');

})