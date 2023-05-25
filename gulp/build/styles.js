'use strict';

const { src, dest, task } = require('gulp');
const concat = require('gulp-concat');
const stripCssComments = require('gulp-strip-css-comments');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const config = require('../../gulp-config');

task('build:css', (d) => {

   console.log(`
            ----------------------------------------
            🧱 BUILD:
            📦 Minifying CSS...
            📦 ... please wait ...
            ----------------------------------------
         `);

   src([
      `${config.paths.dist}/assets/global.css`, // Include css files
   ])
      .pipe(concat({ path: 'app.min.css' }))        // Concat all css files
      .pipe(stripCssComments({ preserve: false }))  // Remove comments
      .pipe(autoprefixer({ cascade: false }))       // Add vendor prefixes
      .pipe(cleanCSS())                             // Minify css
      .pipe(dest(`${config.paths.build}/`))         // Output to build folder
      .on('end', () => {
         console.log(`
            ----------------------------------------
            🧱 BUILD:
            📦 CSS minified! (find in /${config.paths.build}/app.css)
            ----------------------------------------
         `);
         d();
      });
});