FROM ubuntu:16.04

RUN apt-get update && apt-get upgrade
    # apt-get install libcurl3 libgssapi-krb5-2 libkrb5-dbg libldap-2.4-2 libpcap0.8 libsasl2-2 snmp openssl

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4 && \ 
    echo "deb [ arch=amd64,arm64,ppc64el,s390x ] http://repo.mongodb.com/apt/ubuntu xenial/mongodb-enterprise/4.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-enterprise.list && \ 
    apt-get update && \ 
    apt-get install -y locales && \
    apt-get install -y mongodb-enterprise && \
    apt-get install -y build-essential curl libssl-dev libcurl4-openssl-dev

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
    apt-get install -y nodejs

# Set unicode
RUN locale-gen en_US.UTF-8  
ENV LANG en_US.UTF-8  
ENV LANGUAGE en_US:en  
ENV LC_ALL en_US.UTF-8

COPY . /home/iniot_js
WORKDIR /home/iniot_js

COPY start.sh /usr/bin
RUN chmod +x /usr/bin/start.sh

ENTRYPOINT ["/usr/bin/start.sh"]
