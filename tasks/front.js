import gulp from 'gulp'
import webpack from 'webpack'
import gulpWebpack from 'webpack-stream'

// Laravel Mix が提供するwebpack.config.jsを読み込む
// このファイルからユーザー定義のwebpack.mix.jsが参照される
const config = require('../node_modules/laravel-mix/setup/webpack.config.js')

export function front() {
  return gulp
    .src('src/front/**/*.(html|scss|js|jsx)')
    .pipe(
      gulpWebpack(config),
      webpack
    )
    .pipe(gulp.dest('.'))
}
