import { createServer, STATUS_CODES } from "node:http"
import { URL } from "node:url"

const PORT = process.env.PORT || 3000;

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

const server = createServer(
  (request, response) => {
    console.log(`Received request for: ${request.url} with method : ${request.method}`)
    response.setHeader("Content-Type", "text/html")
    // 1. checking the HTTP method
    if (request.method !== 'GET') {
      response.statusCode = 405 // method not allowed
      response.end(STATUS_CODES[response.statusCode] + '\r\n')
      return // stop processing
    }

    // 2. get the requested path
    const { pathname } = new URL(`http://localhost:${PORT}` + request.url)

    // 3. Route based based on the pathname

    if (pathname === '/') {
      response.statusCode = 200;
      response.end(root)
      return;
    }
    if (pathname === "/hello") {
      response.statusCode = 200;
      response.end(hello)
      return;
    }

    // 4. handle not found routes
    response.statusCode = 404;
    response.end(STATUS_CODES[response.statusCode] + '\r\n')
  })




server.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`)
})
