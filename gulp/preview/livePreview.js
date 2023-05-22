'use strict';

const { task } = require('gulp');
const browserSync = require('browser-sync').create();

task('preview:dev', (d) => {
   browserSync.init({         // Initialize browserSync
      server: {
         baseDir: 'public',
         port: 3000,
      }
   });
   d();                       // Done
   
   console.log('----------------------------------------');
   console.log('🤖 DEV:');
   console.log('👀 Live preview ready!');
   console.log(`👀 http://localhost:3000 to see dev preview!`);
   console.log('----------------------------------------');
});