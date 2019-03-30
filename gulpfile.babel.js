import { parallel, series } from 'gulp'
import { babel } from './tasks/babel'
import { front } from './tasks/front' // ★ 追加
import { nodemon } from './tasks/nodemon'
import { watchFiles } from './tasks/watch'

export const dev = series(
  parallel(babel, front), // ★ front 追加
  parallel(nodemon, watchFiles)
)

export const prod = parallel(babel, front) // ★ 変更
