import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const params = new URLSearchParams(location.search);
  
  res.send('');
})

app.listen(port)

export default app
