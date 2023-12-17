#!/bin/bash
# Developed by Dimokus (https://t.me/Dimokus)
source $HOME/.bashrc
apt-get install -y sudo nano wget tar zip unzip jq ssh nginx nodejs npm git
echo "PermitRootLogin yes" >> /etc/ssh/sshd_config
(echo ${my_root_password}; echo ${my_root_password}) | passwd root
service ssh restart
#service nginx start
sleep 5
rm /var/www/html/index.nginx-debian.html
cd /var/www/html/
npx create-react-app my-react-app
cd my-react-app
git clone https://github.com/PavloDereniuk/goit-react-hw-06-phonebook 
npm install
sleep 500
sudo PORT=80 npm start .