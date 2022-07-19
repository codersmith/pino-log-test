const _p = require('./logger-pino.js')
const _c = require('./logger-console.js')
const { USE_LOGGER } = require('./env.js')

let logger
if (USE_LOGGER === 'pino') {
  logger = _p.logger
} else {
  logger = _c.logger
}

module.exports = {
  logger,
}