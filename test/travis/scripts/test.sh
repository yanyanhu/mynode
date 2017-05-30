#!/bin/bash

set -e

# Basic docker test
echo "docker test starts..."
docker pull busybox
docker run --name test-busybox -idt busybox:latest httpd -f -p 3000
docker ps -a
docker rm -f test-busybox
echo "docker test finished."

echo "build busybox image"
docker build -f test/travis/scripts/dockerfiles/busybox_example -t busybox:test .
docker tag busybox:test registry.ng.bluemix.net/testblue/busybox:test

# Setup bluemix containers service env
# ...first add the Cloud Foundry Foundation public key and package repository to your system
wget -q -O - https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key | sudo apt-key add -
echo "deb http://packages.cloudfoundry.org/debian stable main" | sudo tee /etc/apt/sources.list.d/cloudfoundry-cli.list
# ...then, update your local package index, then finally install the cf CLI
sudo apt-get update
sudo apt-get install cf-cli

# Install bluemix CLI
sudo wget http://public.dhe.ibm.com/cloud/bluemix/cli/bluemix-cli/Bluemix_CLI_0.5.4_amd64.tar.gz
sudo tar -zxf Bluemix_CLI_0.5.4_amd64.tar.gz

cd Bluemix_CLI
sudo ./install_bluemix_cli
