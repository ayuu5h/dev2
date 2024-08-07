#!/bin/bash
BACKEND_IP=$1
sudo apt-get update -y
sudo apt-get install -y docker.io
sudo systemctl start docker
sudo usermod -a -G docker ec2-user
docker login -u ashanna -p Ayush887766@
sudo docker pull ashanna/frontend:latest
sed -i "s/<backend-private-ip>/$BACKEND_IP/g" /usr/share/nginx/html/script.js
sudo docker run -d -p 80:80 ashanna/frontend
