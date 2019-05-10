const router = require('express').Router()
module.exports = router

router.get('/', (req, res, next) => {
  try {
    res.send('../../public/bundle.js')
    } catch (err) {
    next(err)
  }
})
