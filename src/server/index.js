import express from 'express'
import path from 'path' // ★ 追加

const app = express()

app.use(express.static(path.join(__dirname, '../public'))) // ★ 追加
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Node' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
