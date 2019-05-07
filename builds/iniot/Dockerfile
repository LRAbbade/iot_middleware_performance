FROM ubuntu:16.04

RUN apt-get update && apt-get upgrade
    # apt-get install libcurl3 libgssapi-krb5-2 libkrb5-dbg libldap-2.4-2 libpcap0.8 libsasl2-2 snmp openssl

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4 && \ 
    echo "deb [ arch=amd64,arm64,ppc64el,s390x ] http://repo.mongodb.com/apt/ubuntu xenial/mongodb-enterprise/4.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-enterprise.list && \ 
    apt-get update && \ 
    apt-get install -y mongodb-enterprise

RUN mkdir -p /data/db
VOLUME ./data /data/db

# WORKDIR /home
ENTRYPOINT ["/usr/bin/mongod"]

# instalar jdk (oracle)

# curl iniot bitbucket

# java -jar deviceapi
