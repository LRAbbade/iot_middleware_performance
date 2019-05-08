#!/bin/bash
mongod > /home/iniot_js/mongo.log &
npm start

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
