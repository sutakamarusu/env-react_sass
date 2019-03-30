import gulp from 'gulp'
import gulpBabel from 'gulp-babel'

export function babel() {
  return gulp
    .src('src/server/**/*.js')
    .pipe(
      gulpBabel({
        presets: ['@babel/env'],
      })
    )
    .pipe(gulp.dest('dist/server'))
}
