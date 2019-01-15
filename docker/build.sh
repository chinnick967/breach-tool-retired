#!/bin/sh
set -ex
cd $(dirname $0)/.. && \
    docker build \
        --cache-from emeqcgames.azurecr.io/breach-cs-site:latest \
        -t emeqcgames.azurecr.io/breach-cs-site:$(git rev-parse HEAD|awk '{print substr($0, 0, 8)}') \
        -f docker/Dockerfile \
        --build-arg PACKAGE_SHA1=$(git log package.json|tee|head -n 1|awk '{print substr($2, 0, 8)}') \
        .
