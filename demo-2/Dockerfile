# docker build -t camp-demo-2 .
# docker run -it --rm -p 127.0.0.1:8443:8443 --env-file=.env camp-demo-2

FROM ubuntu:18.04

# utils and wget
RUN  apt-get update && \
  apt-get install -y apt-utils && \
  apt-get install -y wget && \
  apt-get install -y nodejs && \
  apt-get install -y npm && \
  apt-get install -y golang-go && \
  apt-get install -y git

# install java - man dir creation required for install
RUN mkdir -p /usr/share/man/man1 && \
 apt install -y openjdk-11-jdk

# Azure Cli
# this either adds python3 or it is already there
RUN wget https://aka.ms/InstallAzureCLIDeb -O ./usr/local/bin/InstallAzureCLIDeb.sh
RUN ls ./usr/local/bin
RUN ls ./bin/
RUN ./bin/bash ./usr/local/bin/InstallAzureCLIDeb.sh

## .NET Core 3.x
# https://dotnet.microsoft.com/download/linux-package-manager/ubuntu18-04/sdk-current
RUN apt-get install -y gpg && \
  wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.asc.gpg && \
  mv microsoft.asc.gpg /etc/apt/trusted.gpg.d/ && \
  wget -q https://packages.microsoft.com/config/ubuntu/18.04/prod.list && \
  mv prod.list /etc/apt/sources.list.d/microsoft-prod.list && \
  chown root:root /etc/apt/trusted.gpg.d/microsoft.asc.gpg && \
  chown root:root /etc/apt/sources.list.d/microsoft-prod.list && \
  apt-get install -y apt-transport-https && \
  apt-get update && \
  apt-get install -y dotnet-sdk-3.0


RUN cd /usr/local/bin
RUN ls

# download the coder VSCode binary, untar it at root
# http://$public_ip:8443/
#RUN wget https://github.com/cdr/code-server/releases/download/1.1156-vsc1.33.1/code-server1.1156-vsc1.33.1-linux-x64.tar.gz -O ./usr/local/bin/code-server1.1156-vsc1.33.1-linux-x64.tar.gz && \
#    tar -xvzf ./usr/local/bin/code-server1.1156-vsc1.33.1-linux-x64.tar.gz

WORKDIR /usr/src/

COPY . .

RUN git clone https://github.com/Azure-Samples/cognitive-services-quickstart-code

# text editor
RUN apt-get install nano