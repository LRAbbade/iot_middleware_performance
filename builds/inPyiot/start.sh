#!/bin/bash
mkdir -p /data/db && chown -R mongodb:mongodb /data/db
mongod --repair && mongod > /home/inpyiot/mongo.log &
echo "waiting for mongod to setup properly"
sleep 120s && echo "starting inpyiot" && \
python -u /home/inpyiot/main.py

#Define cleanup procedure
cleanup() {
    # stop mongod
    echo "stopping mongod"
    kill $(ps -ef | awk '/[m]ongod/{print $2}')
}

#Trap SIGTERM
trap 'true' SIGTERM

#Execute command
"${@}" &

#Wait
wait $!

#Cleanup
cleanup
