#!/usr/bin/env bash

set -ex

docker compose pull

docker compose up -d

docker compose logs -f
