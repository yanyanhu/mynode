#!/bin/bash


echo "docker test starts..."
docker pull busybox
docker run --name test-busybox -idt busybox:latest httpd -f -p 3000
docker ps -a
docker rm -f test-busybox
echo "docker test finished."


function getdir(){
    for element in `ls $1`
    do
        dir_or_file=$1"/"$element
        if [ -d $dir_or_file ]
        then
            getdir $dir_or_file
        else
            echo $dir_or_file
        fi
    done
}


root_dir="./test/e2e"
echo Running end-to-end test...
for filename in `getdir $root_dir`
do
    echo Running test case $filename ...
    xvfb-run --server-args="-screen 0 1024x768x24" node $filename
done
echo Running end-to-end test, done.
