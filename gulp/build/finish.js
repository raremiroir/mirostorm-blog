'use strict';

const { task } = require('gulp');
const config = require('../../gulp-config');

task('build:finish', (d) => {
   console.log('----------------------------------------');
   console.log(`🧱 BUILD:`);
   console.log(`💪 Build finished! Build files are in /${config.paths.build}`);
   console.log(`🧱 Run 'npm run preview' or 'gulp preview' to preview the build`);
   console.log('----------------------------------------');
   d();
});