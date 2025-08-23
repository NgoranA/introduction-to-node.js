'use strict'
const http = require('node:http')
const url = require('node:url')

const brands = ['Gazelle', 'Batavus', 'Azor', 'Cortina', 'Giant', 'Sparta']
const MISSING_ID = 3 // Simulate a missing resource for ID 3

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url)
  let id = pathname.match(/^\/(\d+)$/)

  if (!id) {
    res.statusCode = 400
    return void res.end()
  }

  id = Number(id[1])

  if (id === MISSING_ID) {
    res.statusCode = 404
    return void res.end()
  }

  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({
    id: id,
    name: brands[id % brands.length] // Cycle through brands based on ID
  }))
})

server.listen(process.env.PORT || 5000, () => {
  const { port } = server.address()
  console.log('Brand service listening on localhost on port: ' + port)
})
