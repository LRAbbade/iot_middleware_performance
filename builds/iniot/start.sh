#!/bin/bash
mkdir -p /data/db && chown -R mongodb:mongodb /data/db
mongod --repair && mongod > /home/iniot/mongo.log &
echo "waiting for mongod to setup properly"
sleep 120s && echo "starting iniot" && \
java -jar InIoT-REST.jar

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
