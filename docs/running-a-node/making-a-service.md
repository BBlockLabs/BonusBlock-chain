---
sidebar_position: 6
---

# Making a service
This guide explains how to make a service for bonus-blockd so it will launch on system start

## Creating the service file

Create a new .service file
```bash
nano /etc/systemd/system/bonusblock.service
```

Copy the following data to bonusblock.service
```text
[Unit]
Description=BonusBlock Node
After=network-online.target

[Service]
User=root
ExecStart=/root/go/bin/bonus-blockd start --rpc.laddr=tcp://0.0.0.0:26657
Restart=on-failure
RestartSec=3
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
```

## Starting the service
Here is a list of useful commands to start and see the status of a service
```bash
# Make service run on system start
sudo systemctl enable bonusblock

# Start the service
sudo service bonusblock start

# Check service status
sudo systemctl status bonusblock.service

# View live log of the service
journalctl -f -u bonusblock.service

```