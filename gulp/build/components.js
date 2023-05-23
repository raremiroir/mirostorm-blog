'use strict';

const { src, dest, task } = require('gulp');
const fileInclude = require('gulp-file-include');
const concat = require('gulp-concat');
const uglify = require('gulp-terser');
const config = require('../../gulp-config');


task('build:components', (d) => {
   src(`${config.paths.src}/components/3_Molecules/*.js`)                // Get all js files
      .pipe(concat({ path: `components.js` }))  // Concat all js files
      .pipe(uglify())                           // Minify js
      .pipe(dest(`${config.paths.build}/`));    // Output to build folder

   src([                                      // Get all html files
      `${config.paths.src}/routes/**/*.html`, // from routes folder
      `${config.paths.src}/routes/*.html`,                         
   ])
      .pipe(fileInclude({                       // Include components
         prefix: `@@`,                             // with @@ prefix
         basepath: '@file',                        // from current file
      }))
      .pipe(dest(`${config.paths.build}/`));                    // Output to dist folder

   console.log('----------------------------------------');
   console.log('🧱 BUILD:');
   console.log(`📦 Components (HTML & JS) parsed! (find in /${config.paths.build}/components)`);
   console.log('----------------------------------------');
   return d();                                         // Done

})