'use strict';
const { watch, task, series, parallel } = require('gulp');
const requireDir = require('require-dir');
requireDir('./gulp');
requireDir('./gulp/dev');
requireDir('./gulp/build');
requireDir('./gulp/preview');
requireDir('./gulp/dev/components');

// COMPONENTS
task('components', series('components:html', 'components:js'));

// WATCHER
task('watch', () => {
   watch( 
      [`src/routes/**/*.html`, `src/routes/*.html`],  
      series('dev:css', 'components:html', 'preview:reload') 
   );
   watch( `src/components/**/*.js`, series('components:js',  'preview:reload') );
   watch( `src/assets/css/*.scss`, series('dev:css',         'preview:reload') );
   watch( `src/assets/js/*`,       series('dev:js',          'preview:reload') );
   watch( `src/assets/img/**/*`,   series('dev:img',         'preview:reload') );

   console.log('----------------------------------------');
   console.log('🤖 DEV:');
   console.log('👁️ Watching for changes...');
   console.log('----------------------------------------');
});

// EXPORT TASKS
task('clean', series('dev:clean', 'build:clean'));

exports.dev = series(
   'dev:clean',
   'components',
   parallel('dev:css', 'dev:js', 'dev:img'),
   'preview:dev',
   'watch'
)

exports.build = series(
   'build:clean',
   'build:components',
   parallel('build:css', 'build:js', 'build:img'),
   'build:finish'
)

exports.default = series('intro');