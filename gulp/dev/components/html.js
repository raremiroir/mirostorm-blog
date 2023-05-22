'use strict';

const { src, dest, task } = require('gulp');
const fileInclude = require('gulp-file-include');

task('dev:components:html', (d) => {
   src([                           // Get all html files
      `src/routes/**/*.html`,       // from routes folder
      `src/routes/*.html`,       // from routes folder
   ])
      .pipe(fileInclude({          // Include components
         prefix: '@@',              // with @@ prefix
         basepath: '@file',         // from current file
      }))
      .pipe(dest(`public/`));       // Output to dist folder
   d();                            // Done
   
   console.log('----------------------------------------');
   console.log('🤖 DEV:');
   console.log('📦 Components (HTML) parsed! (find in /public)');
   console.log('----------------------------------------');
})
