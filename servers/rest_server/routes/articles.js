const { finished } = require("node:stream")
const express = require("express")
const hnStream = require("hn-latest-stream")

const router = express.Router()

router.get("/", function (req, res, next) {
  const { amount = 10, type = "html" } = req.query
  if (type === "html") res.type("text/html")
  if (type === "json") res.type("application/json")

  const stream = hnStream(amount, type)

  stream.pipe(res, { end: false })

  finished(stream, (err) => {
    if (err) {
      console.error('Stream probably failed', err)
      next(err);
      return;
    }
    console.log('Stream finished reading successfully')
    res.end()
  })
})

module.exports = router
