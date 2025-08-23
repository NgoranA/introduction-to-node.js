import { Router } from "express"
const router = Router()

const root = `
<html>
  <head>
    <style>
      body { background: #333; margin: 1.5rem }
      a { color: yellow; font-size: 2.5rem; font-family: ubuntu }
    </style>
  </head>
  <body>
    <a href='/hello'>Go to Hello Page </a>
  </body>
</html>
`

router.get('/', (req, res, next) => {
  res.send(root)
})

export default router
