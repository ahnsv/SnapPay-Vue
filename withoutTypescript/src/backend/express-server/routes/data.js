const express = require('express')
const router = express.Router()
const data = require('../data.json')

router.get('/', (req, res, next) => {
  res.send(data)
})
router.get('/products', (req, res, next) => res.send(data.products))
router.get('/cart', (req, res, next) => res.send(data.cart))

module.exports = router
