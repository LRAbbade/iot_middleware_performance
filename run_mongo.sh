#!/bin/bash
sudo mongod --dbpath /home/ubuntu/iot_middleware_performance/builds/volumes/inpyiot/data/db/ --bind_ip_all --auth -
-port 10017 >> mongo.log &
