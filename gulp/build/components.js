'use strict';

const { src, dest, task } = require('gulp');
const fileInclude = require('gulp-file-include');
const concat = require('gulp-concat');
const uglify = require('gulp-terser');


task('build:components', (d) => {
   src('src/components/3_Molecules/*.js')                // Get all js files
      .pipe(concat({ path: 'components.js' }))  // Concat all js files
      .pipe(uglify())                           // Minify js
      .pipe(dest('build/'));                    // Output to build folder

   src([                                        // Get all html files
      `src/routes/**/*.html`,                      // from routes folder
      `src/routes/*.html`,                         
   ])
      .pipe(fileInclude({                       // Include components
         prefix: '@@',                             // with @@ prefix
         basepath: '@file',                        // from current file
      }))
      .pipe(dest(`build/`));                    // Output to dist folder

   d();                                         // Done

   console.log('----------------------------------------');
   console.log('🧱 BUILD:');
   console.log('📦 Components (HTML & JS) parsed! (find in /build/components)');
   console.log('----------------------------------------');
})