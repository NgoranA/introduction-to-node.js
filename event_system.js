import { EventEmitter } from "node:events";

const myEmitter = new EventEmitter()

myEmitter.on("a_party_event", (arg1) => {
  console.log(arg1 + "1")
})
myEmitter.prependListener("a_party_event", (arg2) => {
  console.log(arg2 + "2")
})

myEmitter.prependListener("a_party_event", (arg2) => {
  console.log(arg2 + "2")
})

myEmitter.emit("a_party_event", "arg")

// myEmitter.emit("a_party_event", "arg1", "args2")
// myEmitter.emit("a_party_event", "arg1", "args2")
// myEmitter.emit("a_party_event", "arg1", "args2")
// myEmitter.emit("a_party_event", "arg1", "args2")
// myEmitter.emit("a_party_event", "arg1", "args2")























































// class MyEmitter extends EventEmitter {
//   constructor(opts = {}) {
//     super(opts)
//     this.name = opts.name
//   }
//
//   destroy(err) {
//     if (err) this.emit('error', err)
//     this.emit("close")
//   }
//
// }
//
// const emitter = new MyEmitter({ name: "SomeExampleEmitter" })
//

