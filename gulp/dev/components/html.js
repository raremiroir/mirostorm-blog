'use strict';

const { src, dest, task } = require('gulp');
const fileInclude = require('gulp-file-include');
const config = require('../../../gulp-config');

task('dev:components:html', (d) => {
   src([                           // Get all html files
      `${config.paths.src}/routes/**/*.html`,       // from routes folder
      `${config.paths.src}/routes/*.html`,       // from routes folder
   ])
      .pipe(fileInclude({          // Include components
         prefix: '@@',              // with @@ prefix
         basepath: '@file',         // from current file
      }))
      .pipe(dest(`${config.paths.dist}/`));       // Output to dist folder
   d();                            // Done
   
   console.log('----------------------------------------');
   console.log('🤖 DEV:');
   console.log(`📦 Components (HTML) parsed! (find in /${config.paths.dist})`);
   console.log('----------------------------------------');
})
