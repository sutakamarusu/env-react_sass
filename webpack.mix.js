let mix = require('laravel-mix')

mix
  .react('src/front/js/main.js', './dist/public/js')
  .sass('src/front/sass/app.scss', './dist/public/css')
  .copy('src/front/index.html', './dist/public/index.html')
