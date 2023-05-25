'use strict';

const { task, series } = require('gulp');
const browserSync = require('browser-sync').create();

task('preview:dev', (d) => {
    browserSync.init({         // Initialize browserSync
      server: {
         baseDir: 'public',
         port: 3000,
      }
   });
   console.log(`
      ----------------------------------------
      🤖 DEV:
      👀 Live preview ready!
      👀 http://localhost:3000 to see dev preview!
      👀 Press 'CTRL+C' to stop preview.
      ----------------------------------------
   `);
   // series('watch');
   d();                       // Done
});