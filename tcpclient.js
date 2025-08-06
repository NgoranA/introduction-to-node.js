import net from "node:net"

const client = net.connect(3000, () => {
  console.log("Connected to TCP Server")
  process.stdin.pipe(client).pipe(process.stdout)
})


client.pipe(process.stdout)

client.on("end", () => {
  console.log("\nDisconnnected from the server")
})

client.on("error", (err) => {
  console.error('Client socker err', err)
})
