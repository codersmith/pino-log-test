require('dotenv').config()
const { logger } = require('./logger.js')

const wait = ms => new Promise(r => setTimeout(r, ms))

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const onEvent = async (event) => {
  logger.info('👀 Doing lots of important stuff at ' + event)
}

(async () => {
  while (true) {
    await onEvent(new Date().getTime())
    // wait between 5-10 seconds
    await wait(randomIntFromInterval(5000, 10000))
  }
})()