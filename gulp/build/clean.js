'use strict';

const { src, dest, task } = require('gulp');
const clean = require('gulp-clean');

const config = require('../../gulp-config');

task('build:clean', (d) => {
   src(`${config.paths.build}/*`, { read: false, allowEmpty: true })  // Get all files in build folder
      .pipe(clean());                                 // Clean build folder
   d();                                               // Done
   
   console.log('----------------------------------------');
   console.log('🧱 BUILD:');
   console.log('🫧 Build Folder Cleaned!');
   console.log('----------------------------------------');
});