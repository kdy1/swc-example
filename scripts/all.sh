#!/bin/bash

set -e

npx swc input.js inputs/**/*.js -d out
npx swc input.js inputs/**/*.ts -d out