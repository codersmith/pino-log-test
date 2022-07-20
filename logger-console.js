const os = require('os')

const logger = {
  info: (msg) => {
    const obj = {
      level: 30,
      time: (new Date()).toISOString(),
      pid: process.pid,
      hostname: os.hostname(),
      logger: 'console.log',
      msg,
    }
    console.log(JSON.stringify(obj))
  },
}

module.exports = {
  logger,
}
