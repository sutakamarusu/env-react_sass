import gulpNodemon from 'gulp-nodemon'
import { serve } from './browser-sync' // ★ 追加

export function nodemon(callback) {
  let started = false

  // 初回起動時および再起動時に実行される
  const onStart = () => {
    if (!started) {
      callback()
      serve() // ★ 追加
      started = true
    }
  }

  gulpNodemon({
    script: 'dist/server/index.js',
    watch: 'dist/server',
  }).on('start', onStart)
}
