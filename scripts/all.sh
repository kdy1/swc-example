#!/bin/bash

set -e

npx swc inputs -d out
npx babel inputs -d out-babel