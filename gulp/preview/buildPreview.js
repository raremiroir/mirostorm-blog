'use strict';

const { task } = require('gulp');
const browserSync = require('browser-sync').create();

task('preview', (d) => {
   browserSync.init({
      server: {
         baseDir: 'build',
         port: 3000,
      }
   })
   d();
   console.log('----------------------------------------');
   console.log('🧱 BUILD:');
   console.log('👀 Build preview ready!');
   console.log('----------------------------------------');
})