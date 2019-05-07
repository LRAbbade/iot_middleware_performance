#!/bin/bash
mkdir -p /data/db
mongod > /home/inpyiot/mongo.log &
python -u /home/inpyiot/main.py
