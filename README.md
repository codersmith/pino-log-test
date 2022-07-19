# Reproduce pino log delay to syslog

Reference: https://github.com/pinojs/pino/issues/1497

# Setup
```sh
yarn install
```

Configure `.env`:
```sh
USE_LOGGER=pino

## OR 

USE_LOGGER=console
```

# Run
```sh
node index.js
```