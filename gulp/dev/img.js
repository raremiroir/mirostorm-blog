'use strict';

const { src, dest, task } = require('gulp');
const config = require('../../gulp-config');

task('dev:img', (d) => {

   console.log(`
            ----------------------------------------
            🤖 DEV:
            📷 Getting Images...
            📷 ... please wait ...
            ----------------------------------------
         `);
   
   src(`${config.paths.src}/assets/img/**/*`)
      .pipe(dest(`${config.paths.dist}/assets/img/`))
      .on('end', () => {
         console.log(`
            ----------------------------------------
            🤖 DEV:
            📷 Images ready for dev environment! (find in /${config.paths.dist}/assets/img/*)
            ----------------------------------------
         `);
         d();
      });
});