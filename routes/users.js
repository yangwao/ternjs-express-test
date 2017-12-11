var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/:x/:y/:z', function (req, res, next) {
  res.send('respond with a resource')
  if (req.params.x) {
    if (req.params.y) {
      if (req.params.z) {
        return res.json({})
      }
    }
  }
})

module.exports = router
