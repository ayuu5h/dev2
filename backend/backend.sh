#!/bin/bash
sudo apt-get update -y
sudo apt-get install -y docker.io
sudo systemctl start docker
sudo usermod -a -G docker ec2-user
docker login -u ashanna -p Ayush887766@
sudo docker pull ashanna/backend:latest
sudo docker run -d -p 3306:3306 --name backend -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=testdb ashanna/backend
