'use strict';

const { src, dest, task } = require('gulp');
const config = require('../../gulp-config');

task('dev:img', (d) => {
   src(`${config.paths.src}/assets/img/**/*`)
      .pipe(dest(`${config.paths.dist}/assets/img/`));
   console.log('----------------------------------------');
   console.log('🤖 DEV:');
   console.log(`📷 Images ready for dev environment! (find in /${config.paths.dist}/assets/img)`);
   console.log('----------------------------------------');
   return d();
});