# CREDIT: https://github.com/shren207/nextjs-docker-compose
# Dockerfile
FROM node:18-buster

RUN mkdir -p /usr/bin/app/src
ADD ./src /usr/bin/app/src

RUN cd /usr/bin/app/src && \
    yarn && \
    yarn build

# path to package.json
WORKDIR /usr/bin/app
