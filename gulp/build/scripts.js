'use strict';

const { src, dest, task } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-terser');

task('build:js', (d) => {
   src('src/assets/js/**/*.js')
      .pipe(concat({ path: 'app.js' }))
      .pipe(uglify())
      .pipe(dest('./build/'));
   d();
   
   console.log('----------------------------------------');
   console.log('🧱 BUILD:');
   console.log('📦 JS minified! (find in /build)');
   console.log('----------------------------------------');
})