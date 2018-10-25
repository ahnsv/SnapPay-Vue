import data from './data.json'
const express = require('express')
const app = express()
const port = 3000
const router = express.Router()

router.get('/products', (req, res) => {
    res.send(data.products)
})

router.get('/cart', (req, res) => {
    res.send(data.cart)
})

app.use('/', router)
app.listen(port)
console.log('Server runs at ', port)