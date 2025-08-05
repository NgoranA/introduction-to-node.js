import { EventEmitter, once } from "node:events"

import { setTimeout } from "node:timers/promises"

const configEmitter = new EventEmitter()
const ac = new AbortController()
const { signal } = ac

setTimeout(2000 * Math.random(), null, { signal }).then(() => {
  configEmitter.emit("config_update", { config: "new config data" })
})

setTimeout(500).then(() => ac.abort())

const run = async function () {
  try {
    const [update] = await once(configEmitter, 'config_update', { signal })
    console.log('Received Configuration update => ', update)
  } catch (error) {
    if (error.code !== 'ABORT_ERR') throw error;
    console.log('Configuration update timed out and was canceled')
  }
}

run()


