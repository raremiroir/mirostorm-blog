'use strict';
const { watch, task, series, parallel } = require('gulp');
const requireDir = require('require-dir');
requireDir('./gulp');
requireDir('./gulp/dev');
requireDir('./gulp/build');
requireDir('./gulp/preview');

// Default task --> Run intro
exports.default = series('intro');

/* =============
      BASE
============= */
task('clean', series('dev:clean', 'build:clean'));

/* =============
      DEV
============= */
// Parse HTML
task('dev:html', series('dev:components', 'dev:routes'));
// Run all dev parsers
task('dev:all', series(
   'dev:html',
   'dev:css',
   'dev:js',
   'dev:img',
));

// Watcher
task('watch', (d) => {
   console.log(`
      ----------------------------------------
      🤖 DEV:
      👁️  Watching for changes...
      ----------------------------------------
   `);
   
   watch([
      'src/assets/css/**/**/*.scss',
      'src/assets/css/**/*.scss',
      'src/assets/css/*.scss',
   ], series('dev:css', 'preview:reload') );
   watch('src/assets/js/**/*', series('dev:js', 'preview:reload') );
   watch('src/assets/img/**/*', series('dev:img', 'preview:reload') );
   watch('src/components/**/*', series('dev:components', 'preview:reload') );
   watch([
      'src/routes/**/*.html',
      'src/routes/*.html'
   ], series('dev:routes', 'preview:reload') );
   // watch( `public/*`, series('preview:reload') );
   d();
});

// Run dev parsers and start preview server
task('dev', series(
   'dev:all',
   'preview:dev',
   'watch'
));

/* =============
     BUILD
============= */
task('build:all', series(
   'dev:all',
   'build:html',
   'build:css',
   'build:js',
   'build:img',
));

task('build', series(
   'clean',
   'build:all',
   'build:finish'
));