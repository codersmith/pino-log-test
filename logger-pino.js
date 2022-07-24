const pino = require('pino')

const _l = pino({
  timestamp: pino.stdTimeFunctions.isoTime,
}, process.stdout)
const logger = _l.child({ logger: 'pino' })

module.exports = {
  logger,
}
