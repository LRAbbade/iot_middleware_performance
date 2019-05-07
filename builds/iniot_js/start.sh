#!/bin/bash
mkdir -p /data/db
mongod > /home/iniot_js/mongo.log &
cd /home/iniot_js
npm start
