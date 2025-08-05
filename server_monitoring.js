import { EventEmitter } from "node:events"



class ServerMonitor extends EventEmitter {
  constructor() {
    super()
    this.cpuUsage = 0;
  }

  updateCPUUsage(usage) {
    this.cpuUsage = usage;
    if (this.cpuUsage > 80) {
      this.emit("cpu_overload", { cpuUsage: this.cpuUsage })
    }
  }
}

const monitor = new ServerMonitor()

monitor.on("cpu_overload", (data) => {
  console.warn(`Warning: There is serious HIgh CPU Usage that has been detected! ${data.cpuUsage}`)
})

setInterval(() => {
  const usage = Math.floor(Math.random() * 100)
  console.log((`Current CPU usage:==> ${usage}`))
  monitor.updateCPUUsage(usage)
}, 1000)







