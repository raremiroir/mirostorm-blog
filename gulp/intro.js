'use strict';

const { task } = require('gulp');

task('intro', (d) => {
   console.log('█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█');
   console.log('█ █▀▀▀ █  █ █   █▀▀█  ▀█▀ █▀▀█ █▀▀▀ █ ▄▀ █▀▀▀ █');
   console.log('█ █ ▀█ █  █ █   █▀▀    █  █▀▀█ ▀▀▀█ █▀▀▄ ▀▀▀█ █');
   console.log('█ ▀▀▀▀ ▀▀▀▀ ▀▀▀ ▀      ▀  ▀  ▀ ▀▀▀▀ ▀  ▀ ▀▀▀▀ █');
   console.log('█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█');
   console.log('█        ⚡   WELCOME TO GULP CLI   ⚡        █');
   console.log('█    by Miro Storm Polfliet    @raremiroir    █');
   console.log('█---------------------------------------------█');
   console.log('█               COMMANDS (NPM):               █');
   console.log('█ 🤖 npm run dev                   dev server █');
   console.log('█ 🧱 npm run build                build files █');
   console.log('█ 🫧  npm run clean      clean dev/build files █');
   console.log('█ 👀 npm run preview      preview build files █');
   console.log('█---------------------------------------------█');
   console.log('█               COMMANDS (GULP):              █');
   console.log('█ 🤖 gulp dev                      dev server █');
   console.log('█ 🧱 gulp build                   build files █');
   console.log('█ 🫧  gulp clean         clean dev/build files █');
   console.log('█ 👀 gulp preview         preview build files █');
   console.log('█---------------------------------------------█');
   console.log('█       run `npm run help` or `gulp` to       █');
   console.log('█            call this menu again             █');
   console.log('█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█');
   d();
})