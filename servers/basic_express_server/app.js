import express from "express"
import createError from "http-errors"

import rootRoute from "./routes/index.js"
import helloRoute from "./routes/hello.js"

const app = express()


// register the route
app.use('/', rootRoute)
app.use('/hello', helloRoute)

app.use((req, res, next) => {
  if (req.method !== "GET") {
    return next(createError(405))
  }
  next(createError(404))
})

app.use((err, req, res, next) => {
  console.error(err.stack)

  res.status(err.status || 500)
  res.send(err.message)
})

export default app
