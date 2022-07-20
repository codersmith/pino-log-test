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

# Runtime environment
- AWS EC2 micro instance with standard gp2 SSD
- Operating system: `Ubuntu 22.04 LTS (GNU/Linux 5.15.0-1015-aws x86_64)`
- Program installed as a `systemctl` service:

```
[Unit]
Description=Log Buffer Test
After=network.target auditd.service
Wants=network.target
[Service]
WorkingDirectory=/home/ubuntu/pino-log-test
ExecStart=/home/ubuntu/.nvm/versions/node/v16.15.1/bin/node index.js
User=ubuntu
Group=ubuntu
Restart=always
RestartSec=5s

[Install]
WantedBy=multi-user.target
Alias=log-test.service
```
