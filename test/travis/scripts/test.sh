#!/bin/bash

set -e

echo "docker test starts..."
docker pull busybox
docker run --name test-busybox -idt busybox:latest httpd -f -p 3000
docker ps -a
docker rm -f test-busybox
echo "docker test finished."
