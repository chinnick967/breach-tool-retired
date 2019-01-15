#!/bin/sh
set -ex
[ -z "$NODE_ENV" ] && export NODE_ENV=production
exec "$@"