'use strict';
const { watch, task, series, parallel } = require('gulp');
const requireDir = require('require-dir');
requireDir('./gulp');
requireDir('./gulp/dev');
requireDir('./gulp/build');
requireDir('./gulp/preview');
requireDir('./gulp/dev/components');

// COMPONENTS
task('dev:components', series('dev:components:html', 'dev:components:js'));

// WATCHER
task('watch', () => {
   console.log('----------------------------------------');
   console.log('🤖 DEV:');
   console.log('👁️ Watching for changes...');
   console.log('----------------------------------------');
   
   watch([
      'src/assets/css/**/**/*.scss',
      'src/assets/css/**/*.scss',
      'src/assets/css/*.scss',
   ], series('dev:css', 'preview:reload') );
   watch('src/assets/js/**/*', series('dev:js', 'preview:reload') );
   watch('src/assets/img/**/*', series('dev:img', 'preview:reload') );
   watch('src/components/**/*', series('dev:components:js', 'preview:reload') );
   watch([
      'src/routes/**/*.html',
      'src/routes/*.html'
   ], series('dev:components:html', 'preview:reload') );
   watch( `public/*`, series('preview:reload') );
});

// EXPORT TASKS
task('clean', series('dev:clean', 'build:clean'));

task('dev:all', parallel('dev:css', 'dev:js', 'dev:img', 'dev:components'));
task('build:all', parallel('build:css', 'build:js', 'build:img', 'build:components'));

exports.dev = series(
   'dev:all',
   'preview:dev',
   'watch'
)

exports.build = series(
   'build:clean',
   'build:all',
   'build:finish'
)

exports.default = series('intro');