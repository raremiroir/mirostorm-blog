'use strict';

const { task } = require('gulp');
const config = require('../../gulp-config');

task('build:finish', (d) => {
   console.log(`
      ----------------------------------------
      🧱 BUILD:
      💪 Build finished! Build files are in /${config.paths.build}
      🧱 Run 'npm run preview' or 'gulp preview' to preview the build
      ----------------------------------------
   `)
   return d();
});