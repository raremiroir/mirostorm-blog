const config = {
   paths: {
      src: 'src',              // Source files
      dist: 'public',          // Dist files (dev)
      build: 'build',         // Production build files
   },
   vendor: [
      'node_modules/iconify-icon/dist/iconify-icon.min.js',
   ]
}

module.exports = config;