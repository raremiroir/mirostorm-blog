'use strict';

const { task } = require('gulp');
const browserSync = require('browser-sync').create();

task('preview:reload', (d) => {
   console.log('----------------------------------------');
   console.log('Reloading...');
   console.log('----------------------------------------');
   browserSync.reload();
   console.log('🤖 DEV:');
   console.log('👀 Live preview reloaded!');
   console.log(`👀 Press 'CTRL+C' to stop server`);
   console.log('----------------------------------------');
   return d();
})