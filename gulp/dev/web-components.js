'use strict';

const { src, dest, task } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-terser');
const config = require('../../gulp-config');

task('dev:components', (d) => {

   console.log(`
            ----------------------------------------
            🤖 DEV:
            📦 Parsing Web Components...
            📦 ... please wait ...
            ----------------------------------------
         `);

   src(`${config.paths.src}/components/**/*.js`)   // Get all js web components
      .pipe(concat({ path: 'components.js' }))     // Concat all js files
      .pipe(uglify())                              // Uglify js
      .pipe(dest(`${config.paths.dist}/assets/`))         // Output to dist folder
      .on('end', () => {
         console.log(`
            ----------------------------------------
            🤖 DEV:
            📦 Web Components (JS) minified! (find in /${config.paths.dist}/assets/components.js)
            ----------------------------------------
         `);
         d();
      });
});