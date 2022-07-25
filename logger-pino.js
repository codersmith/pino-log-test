const pino = require('pino')

const _l = pino({
  timestamp: pino.stdTimeFunctions.isoTime,
  formatters: {
    bindings(bindings) {
      return { pid: bindings.pid }
    },
  },
}, pino.destination({ sync: true }))

const logger = _l.child({ logger: 'pino' })

module.exports = {
  logger,
}
