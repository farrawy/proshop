const express = require('express')
const products = require('./data/products')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

app.listen(6001, console.log('Server listening on port 6001'))
