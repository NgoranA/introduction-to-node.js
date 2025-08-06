// We are writing a TCP server  that will convert all incoming messages from lowercase to uppercase
// it should also echo back to the client

import net from "node:net"

const server = net.createServer((socket) => {
  console.log("Client connected")

  socket.on("data", (data) => {
    const transformed = data.toString().toUpperCase()
    console.log(`Received: ${data.toString().trim()} | Sending back ${transformed.trim()}`)
    socket.write(transformed)
  })

  socket.on("end", () => {
    console.log('Client disconnected')
  })

  socket.on("error", (err) => {
    console.error("Socket Error", err)
  })
})

server.listen(3000, () => {
  console.info("TCP server is listening on port 3000")
})
