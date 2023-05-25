'use strict';

const { src, dest, task } = require('gulp');
const fileInclude = require('gulp-file-include');
const config = require('../../gulp-config');

task('dev:routes', (d) => {

   console.log(`
            ----------------------------------------
            🤖 DEV:
            📦 Parsing Routes (HTML)...
            📦 ... please wait ...
            ----------------------------------------
         `);
   
   src([
      `${config.paths.src}/routes/**/*.html`,   // Get all html files
      `${config.paths.src}/routes/*.html`,
   ])
      .pipe(fileInclude({                       // Include js web components
         prefix: '@@',                             // with @@ prefix
         basepath: '@file',                        // from current file
      }))
      .pipe(dest(`${config.paths.dist}/`))      // Output to dist folder
      .on('end', () => {
         console.log(`
            ----------------------------------------
            🤖 DEV:
            📦 Routes (HTML) parsed! (find in /${config.paths.dist}/*.html)
            ----------------------------------------
         `);
         d();
      });
});