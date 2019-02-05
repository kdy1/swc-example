#!/bin/bash

set -e

npx swc input.js -d out
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
node $DIR/testSourceMap.js

npx babel input.js -d babel --source-maps