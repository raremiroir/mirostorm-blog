'use strict';

const { 
   src, dest, watch, 
   task, series, parallel 
} = require('gulp');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');

const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');
const uglify = require('gulp-terser');
const purgecss = require('gulp-purgecss');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require("imagemin-pngquant");
const imagemin = require('gulp-imagemin');
const fileInclude = require('gulp-file-include');


const paths = {
   src: './src',
   dist: './public',
   build: './build',
}

// Live preview server
const livePreview = (done) => {
   browserSync.init({
      server: {
         baseDir: paths.dist,
         port: 3000,
      }
   });
   done();
   console.log('----------------------------------------');
   console.log('🤖 DEV:');
   console.log('👀 Live preview ready!');
   console.log(`👀 http://localhost:3000 to see dev preview!`);
   console.log('----------------------------------------');
}
// Trigger reload from browser
const reloadPreview = (done) => {
   console.log('Reloading...');
   browserSync.reload();
   done();
   console.log('----------------------------------------');
   console.log('🤖 DEV:');
   console.log('👀 Live preview reloaded!');
   console.log(`👀 http://localhost:3000 to see dev preview!`);
   console.log('----------------------------------------');
}

// Build preview
const buildPreview = (done) => {
   browserSync.init({
      server: {
         baseDir: paths.build,
         port: 3000,
      }
   });
   done();
   console.log('----------------------------------------');
   console.log('🧱 BUILD:');
   console.log('👀 Build preview ready!');
   console.log(`👀 'npm run preview' or 'gulp preview' to see the build!`);
   console.log('----------------------------------------');
}

// PARSING TASKS
const gen = {

   // DEV TASKS
   dev: {
      // Clean generated files
      clean: (d) => {
         src(`${paths.dist}/assets/*`, { read: false, allowEmpty: true }).pipe(clean());
         d();
         console.log('----------------------------------------');
         console.log('🤖 DEV:');
         console.log('🫧 Dist Folder Cleaned!');
         console.log('----------------------------------------');
      },
      // CSS
      css: (d) => {
         const tailwindcss = require('tailwindcss');
         const autoprefixer = require('autoprefixer');
         src(`${paths.src}/assets/css/**/*.scss`)
            .pipe(sass().on('error', sass.logError))
            .pipe(postcss([tailwindcss(), autoprefixer()]))
            .pipe(concat({ path: 'app.css' }))
            .pipe(dest(`${paths.dist}/assets/`));
         d();
         console.log('----------------------------------------');
         console.log('🤖 DEV:');
         console.log('📦 CSS minified! (find in /public/dist)');
         console.log('----------------------------------------');
      },
      // JS
      js: (d) => {
         src(`${paths.src}/assets/js/**/*.js`)
            .pipe(concat({ path: 'app.js' }))
            .pipe(dest(`${paths.dist}/assets/`));
         d();
         console.log('----------------------------------------');
         console.log('🤖 DEV:');
         console.log('📦 JS minified! (find in /public/dist)');
         console.log('----------------------------------------');
      },
      // IMG
      img: (d) => {
         src(`${paths.src}/assets/img/**/*`)
            .pipe(dest(`${paths.dist}/assets/img/`));
         d();
         console.log('----------------------------------------');
         console.log('🤖 DEV:');
         console.log('📷 Images optimized! (find in /public/dist/img)');
         console.log('----------------------------------------');
      },
   },
   
   // BUILD TASKS
   build: {
      // Clean generated files
      clean: (d) => {
         src(`${paths.build}/*`, { read: false, allowEmpty: true }).pipe(clean());
         d();
         console.log('----------------------------------------');
         console.log('🧱 BUILD:');
         console.log('🫧 Build Folder Cleaned!');
         console.log('----------------------------------------');
      },
      // CSS
      css: (d) => {
         const tailwindcss = require('tailwindcss');
         const autoprefixer = require('autoprefixer');
         const cssnano = require('cssnano');
         src(`${paths.src}/assets/css/**/*.scss`)
         .pipe(sass().on('error', sass.logError))
         .pipe(postcss([
            tailwindcss(),
               autoprefixer(),
               cssnano()
            ]))
            .pipe(purgecss({
               content: [`${paths.dist}/**/*.html`],
               defaultExtractor: content => {
                  const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
                  const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
                  return broadMatches.concat(innerMatches)
               }
            }))
            .pipe(concat({ path: 'app.css' }))
            .pipe(dest(`${paths.build}/`));
         d();
         console.log('----------------------------------------');
         console.log('🧱 BUILD:');
         console.log('📦 CSS minified! (find in /build)');
         console.log('----------------------------------------');
      },
      // JS
      js: (d) => {
         src(`${paths.src}/assets/js/**/*.js`)
            .pipe(concat({ path: 'app.js' }))
            .pipe(uglify())
            .pipe(dest(`${paths.build}/`));
         d();
         console.log('----------------------------------------');
         console.log('🧱 BUILD:');
         console.log('📦 JS minified! (find in /build)');
         console.log('----------------------------------------');
      },
      // IMG
      img: (d) => {
         src(`${paths.src}/assets/img/**/*`)
         .pipe(imagemin([
            pngquant({ quality: [0.6, 0.8] }),
            mozjpeg({ quality: 70 }),
         ]))
         .pipe(dest(`${paths.build}/img/`));
         d();
         console.log('----------------------------------------');
         console.log('🧱 BUILD:');
         console.log('📷 Images optimized! (find in /build/img)');
         console.log('----------------------------------------');
      }
   }
}

// INCLUDE HTML
const includeHTML = async () => {
   return src([
      // `${paths.src}/**/*.html`,
      // `${paths.src}/components/**/*.html`,
      `!${paths.src}/comp/**/*.html`,
      `${paths.src}/routes/**/*.html`,
      `!${paths.dist}/**/*.html`, // ignore dist folder
      `!${paths.src}/components/**/_*.html`, // ignore partials
   ])
   .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file',
   }))
   .pipe(dest(`${paths.dist}`));
}

// WATCHER
const watchAll = () => {
   watch( `${paths.src}/**/*.html`,        series(gen.dev.css, reloadPreview) );
   watch( `${paths.src}/**/*.html`,        series(includeHTML, reloadPreview) );
   watch( `${paths.src}/assets/css/*.scss`,  series(gen.dev.css, reloadPreview) );
   watch( `${paths.src}/assets/js/*`,     series(gen.dev.js,  reloadPreview) );
   watch( `${paths.src}/assets/img/**/*`,   series(gen.dev.img, reloadPreview) );
   console.log('----------------------------------------');
   console.log('🤖 DEV:');
   console.log('👁️ Watching for changes...');
   console.log('----------------------------------------');
}

const finishBuild = (d) => {
   console.log('----------------------------------------');
   console.log(`🧱 BUILD:`);
   console.log(`💪 Build finished! Build files are in ${paths.build}`);
   console.log('----------------------------------------');
   d();
}

task('dev:clean', gen.dev.clean);
task('dev:css', gen.dev.css);
task('dev:js', gen.dev.js);
task('dev:img', gen.dev.img);

task('build:clean', gen.build.clean);
task('build:css', gen.build.css);
task('build:js', gen.build.js);
task('build:img', gen.build.img);

task('html', includeHTML);

task('preview', buildPreview);
task('watch', watchAll);
task('clean', series(
   gen.dev.clean,
   gen.build.clean
))

exports.dev = series(
   gen.dev.clean,
   includeHTML,
   parallel(gen.dev.css, gen.dev.js, gen.dev.img),
   livePreview,
   watchAll
)

exports.build = series(
   gen.build.clean,
   includeHTML,
   parallel(gen.build.css, gen.build.js, gen.build.img),
   finishBuild
)