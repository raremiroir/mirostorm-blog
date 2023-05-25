'use strict';

const { src, dest, task } = require('gulp');
const htmlreplace = require('gulp-html-replace');
const replace = require('gulp-replace');
const config = require('../../gulp-config');

task('build:html', (d) => {
   console.log(`
            ----------------------------------------
            🧱 BUILD:
            📦 Parsing HTML...
            📦 ... please wait ...
            ----------------------------------------
         `);
   
   src([
      `${config.paths.dist}/**/*.html`,   // Get all html files
      `${config.paths.dist}/*.html`,
   ])
      .pipe(htmlreplace({                       // Replace css and js links
         css: 'app.min.css',
         js: 'app.min.js',
         img: {                                 // Replace img links
            src: './img/**.*',
            tpl: '<img src="%s" alt="">'
         }
      }))
      .pipe(replace(/(src|href)="\.\/assets\//g, '$1="./')) // Replace assets links
      .pipe(dest(`${config.paths.build}/`))      // Output to dist folder
      .on('end', () => {
         console.log(`
            ----------------------------------------
            🧱 BUILD:
            📦 HTML parsed! (find in /${config.paths.build}/*.html)
            ----------------------------------------
         `);
         d();
      });
});