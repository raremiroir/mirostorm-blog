'use strict';

const { src, dest, task } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-terser');

task('components:js', (d) => {
   src('src/components/3_Molecules/*.js')
      .pipe(concat({ path: 'components.js' }))
      .pipe(uglify())
      .pipe(dest('./public/'));
   d();
   
   console.log('----------------------------------------');
   console.log('🤖 DEV:');
   console.log('📦 Components (JS) minified! (find in /public)');
   console.log('----------------------------------------');
})