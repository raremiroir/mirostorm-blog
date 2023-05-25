'use strict';

const { src, dest, task } = require('gulp');
const clean = require('gulp-clean');
const config = require('../../gulp-config');

task('dev:clean', async (d) => {
   new Promise((resolve, reject) => {
      src(`${config.paths.dist}/*`, { read: false, allowEmpty: true }) // Get all files in dist assets folder
         .pipe(clean())                                                // Clean dist assets folder
         .on('end', resolve);
   }).then(() => {
      console.log('----------------------------------------'),
      console.log('🤖 DEV:'),
      console.log('🫧 Dist Folder Cleaned!'),
      console.log('----------------------------------------'),
      d()
   });
});