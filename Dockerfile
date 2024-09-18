# CREDIT: https://github.com/shren207/nextjs-docker-compose
# Dockerfile
FROM node:18-buster

RUN mkdir -p /app
ADD ./src/app /app

# path to package.json
WORKDIR /app

RUN cd /app && yarn 
RUN cd /app && yarn build

ENTRYPOINT ["./entry.sh"]
