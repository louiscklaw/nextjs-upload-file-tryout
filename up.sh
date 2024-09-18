#!/usr/bin/env bash

set -ex

# docker build . -t 192.168.10.61:5000/upload_louislabs_com
# docker push 192.168.10.61:5000/upload_louislabs_com

docker compose up -d
# # docker compose logs -f

# docker compose exec -it app bash