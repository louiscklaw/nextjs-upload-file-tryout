# CREDIT: https://github.com/shren207/nextjs-docker-compose
# Dockerfile
FROM node:18-buster

RUN mkdir -p /app/src
ADD ./src/app /app/src

# path to package.json
WORKDIR /app/src

RUN cd /app/src && yarn 
RUN cd /app/src && yarn build

# ENTRYPOINT ["./entry.sh"]
