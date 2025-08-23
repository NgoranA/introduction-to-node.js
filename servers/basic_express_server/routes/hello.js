import { Router } from "express"
const router = Router()
const hello = `
<html>
  <head>
    <style>
      body { background: #333; margin: 1.5rem }
      h1 { color: #EEE; font-family: ubuntu }
    </style>
  </head>
  <body>
    <h1> Hello world Page </h1>
  </body>
</html>
`

router.get("/", (req, res, nex) => {
  res.send(hello)
})

router.get("/1", (req, res, nex) => {
  console.log("From hello 1")
  res.send(hello)
})
router.get("/2", (req, res, nex) => {
  console.log("From hello 2")
  res.send(hello)
})
router.get("/3", (req, res, nex) => {
  console.log("From hello 3")
  res.send(hello)
})
export default router
