'use strict';

const { task } = require('gulp');

task('build:finish', (d) => {
   console.log('----------------------------------------');
   console.log(`🧱 BUILD:`);
   console.log(`💪 Build finished! Build files are in /build`);
   console.log(`🧱 Run 'npm run preview' or 'gulp preview' to preview the build`);
   console.log('----------------------------------------');
   d();
});