var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  someasyncoperation(() => {
    if (!req.query.name) {
      // works fine for situations like
      // /?name=Alice Ngoran req.query.name it is going be "Alice Ngoran"
      return next(new Error('Name is required'))
    }

    if (typeof req.query.name !== "string") {
      return next(new Error('name must be a string'))
    }



    const parts = req.query.name.split(" ")
    const last = parts.pop()
    const first = parts.unshift()

  })
})


module.exports = router
