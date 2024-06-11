#!/usr/bin/env bash

set -ex

yarn

yarn build

yarn serve -h 0.0.0.0
