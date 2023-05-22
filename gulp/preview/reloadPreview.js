'use strict';

const { task } = require('gulp');
const browserSync = require('browser-sync').create();

task('preview:reload', (d) => {
   console.log('----------------------------------------');
   console.log('Reloading...');
   browserSync.reload();
   console.log('----------------------------------------');
   console.log('🤖 DEV:');
   console.log('👀 Live preview reloaded!');
   console.log('----------------------------------------');
   d();
})