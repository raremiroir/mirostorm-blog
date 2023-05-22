'use strict';

const { task } = require('gulp');
const browserSync = require('browser-sync').create();

task('preview:reload', async (d) => {
   console.log('Reloading...');
   browserSync.reload();
   d();
   console.log('----------------------------------------');
   console.log('🤖 DEV:');
   console.log('👀 Live preview reloaded!');
   console.log(`👀 http://localhost:3000 to see dev preview!`);
   console.log('----------------------------------------');
})