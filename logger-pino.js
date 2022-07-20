const pino = require('pino')

const _l = pino({
  timestamp: pino.stdTimeFunctions.isoTime,
})
const logger = _l.child({ logger: 'pino' })

module.exports = {
  logger,
}
