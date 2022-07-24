const pino = require('pino')

const _l = pino({
  timestamp: pino.stdTimeFunctions.isoTime,
}, pino.destination({ sync: true, fsync: true }))

const logger = _l.child({ logger: 'pino' })

module.exports = {
  logger,
}
