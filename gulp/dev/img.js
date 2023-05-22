'use strict';

const { src, dest, task } = require('gulp');

task('dev:img', (d) => {
   src(`src/assets/img/**/*`)
      .pipe(dest(`public/assets/img/`));
   d();
   console.log('----------------------------------------');
   console.log('🤖 DEV:');
   console.log('📷 Images ready for dev environment! (find in /public/assets/img)');
   console.log('----------------------------------------');
});