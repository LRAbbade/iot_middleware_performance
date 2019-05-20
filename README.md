# IoT Middleware Performance

A performance comparison of 3 popular back-end frameworks for IoT middlewares.

## MongoDB

If you want to check the mongo instance of any application, you can launch a mongod service externally accessible, firstly [install mongoodb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/), then you just need to run `run_mongo.sh`. Logs will be saved in `mongod.log`.

Remember to change the directory of the desired iniot application:

```sh
#!/bin/bash
sudo mongod --dbpath /home/ubuntu/iot_middleware_performance/builds/volumes/<change_me>/data/db/ --bind_ip_all --auth -
-port 10017 >> mongo.log &
```

Where `<change_me>` should be one of: "iniot", "iniot_js" or "inpyiot", depending on which application you want to check.

Also check if the path to the project is right, in this case, its set to `/home/ubuntu`, change it to your user.
