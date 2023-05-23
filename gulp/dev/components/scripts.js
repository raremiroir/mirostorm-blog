'use strict';

const { src, dest, task } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-terser');
const config = require('../../../gulp-config');

task('dev:components:js', (d) => {
   src(`${config.paths.src}/components/**/*.js`)
      .pipe(concat({ path: `components.js` }))
      .pipe(uglify())
      .pipe(dest(`${config.paths.dist}/`));
   d();
   
   console.log('----------------------------------------');
   console.log('🤖 DEV:');
   console.log(`📦 Components (JS) minified! (find in /${config.paths.src})`);
   console.log('----------------------------------------');
})