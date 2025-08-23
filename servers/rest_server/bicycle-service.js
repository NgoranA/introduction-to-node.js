// bicycle-service.js
'use strict'
const http = require('node:http')
const url = require('node:url')

const colors = ['Yellow', 'Red', 'Orange', 'Green', 'Blue', 'Indigo']
const MISSING_ID = 2 // Simulate a missing resource for ID 2

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url)
  let id = pathname.match(/^\/(\d+)$/) // Extract ID from path like /1

  if (!id) { // No valid ID in path
    res.statusCode = 400 // Bad Request
    return res.end(JSON.stringify({ error: 'bad request' }))
  }

  id = Number(id[1])

  if (id === MISSING_ID) { // Specific ID to simulate Not Found
    res.statusCode = 404 // Not Found
    return res.end(JSON.stringify({ error: 'Not found' }))
  }

  // Success
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({
    id: id,
    color: colors[id % colors.length] // Cycle through colors based on ID
  }))
})

server.listen(process.env.PORT || 4000, () => { // Listen on PORT env var or random port
  const { port } = server.address()
  console.log('Bicycle service listening on localhost on port: ' + port)
})
