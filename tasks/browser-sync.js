import browserSync from 'browser-sync'

const server = browserSync.create()

export function reload(callback) {
  server.reload()
  callback()
}

export function serve() {
  const port = process.env.PORT || 3000

  server.init({
    proxy: `localhost:${port}`,
    port: 8001,
    open: false,
  })
}
