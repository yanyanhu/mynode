#!/bin/bash

set -e

echo "docker test starts..."
docker pull busybox
docker run --name test-busybox -idt busybox:latest httpd -f -p 3000
docker ps -a
docker rm -f test-busybox
echo "docker test finished."

echo "build busybox image"
docker build -f test/travis/scripts/dockerfiles/busybox_example -t busybox:test .
docker tag busybox:test registry.ng.bluemix.net/testblue/busybox:test
