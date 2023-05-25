'use strict';

const { src, dest, task } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-terser');
const replace = require('gulp-replace');
const config = require('../../gulp-config');

task('build:js', (d) => {

   console.log(`
            ----------------------------------------
            🧱 BUILD:
            📦 Parsing JS...
            📦 ... please wait ...
            ----------------------------------------
         `);

   src([
      `${config.paths.dist}/assets/vendor.js`,     // Include vendor js
      `${config.paths.dist}/assets/components.js`, // Include components js
      `${config.paths.dist}/assets/main.js`,       // Include main js
   ])
      .pipe(concat({ path: 'app.min.js' }))            // Concat all js files
      .pipe(replace(/\.\/assets\//g, './'))    // Replace assets links
      .pipe(uglify())                              // Minify js
      .pipe(dest(`${config.paths.build}/`))        // Output to build folder
      .on('end', () => {
         console.log(`
            ----------------------------------------
            🧱 BUILD:
            📦 All JS parsed! (find in /${config.paths.build}/app.js)
            ----------------------------------------
         `);
         d();
   });
})