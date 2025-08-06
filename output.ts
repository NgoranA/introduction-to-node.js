import { EventEmitter } from "node:events"

// very simple and minimalistic
class ChatRoom extends EventEmitter {
  send_message(user, message) {
    this.emit('message', { user, message, timestamp: Date.now() })
  }
}

const chat = new ChatRoom()

chat.on("message", ({ user, message, timestamp }) => {
  console.log(`[${new Date(timestamp).toLocaleTimeString()}] ${user} => ${message}`)
})

chat.on('message', ({ user, message }) => {
  console.log(`Notification: New Message from ${user}`)
})

chat.send_message("Ngoran", "Hi Wanji!")
