#!/bin/bash

docker pull busybox
docker run --name test-busybox -idt busybox:latest httpd -f -p 3000
docker ps -a
docker rm -f test-busybox
