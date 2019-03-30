import { series, watch } from 'gulp'
import { babel } from './babel'
import { front } from './front' // ★ 追加
import { reload } from './browser-sync' // ★ 追加

export function watchFiles(callback) {
  watch('src/server/**/*.js', babel)
  watch('src/front/**/*.*', series(front, reload)) // ★ 追加

  callback()
}
