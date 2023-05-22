'use strict';

const { src, dest, task } = require('gulp');
const clean = require('gulp-clean');

task('dev:clean', (d) => {
   src(`public/*`, { read: false, allowEmpty: true }) // Get all files in dist assets folder
      .pipe(clean());                                        // Clean dist assets folder
   d();                                                      // Done
   
   console.log('----------------------------------------');
   console.log('🤖 DEV:');
   console.log('🫧 Dist Folder Cleaned!');
   console.log('----------------------------------------');
});