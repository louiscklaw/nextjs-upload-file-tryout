#!/usr/bin/env bash

set -ex

docker compose pull

docker compose up -d

# docker compose exec -it app bash

docker compose logs -f
