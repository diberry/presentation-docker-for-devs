# docker build --no-cache  -t vscode-quickstarts  . 
# docker run -it --rm -p 127.0.0.1:8080:8080  vscode-quickstarts
# winpty docker exec -it 3bc2c984850d /bin/bash
# docker rm $(docker ps -a -f status=exited -q)
FROM ubuntu:latest

RUN  apt-get update && \
  apt-get install -y apt-utils && \
  apt-get install -y gnupg2 && \
  apt-get install -y curl && \
  apt-get install -y wget && \
  apt-get install -y nodejs && \
  apt-get install -y npm && \
  apt-get install -y golang-go && \
  apt-get install -y git 

# Install Python
RUN apt-get install -y software-properties-common && \
  add-apt-repository ppa:deadsnakes/ppa

# yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update && \
  apt-get install -y yarn

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

WORKDIR /usr/src/

# get quickstarts 
RUN git clone https://github.com/Azure-Samples/cognitive-services-quickstart-code

## install vscode prerequisites
# https://github.com/Microsoft/vscode/wiki/How-to-Contribute#build-and-run
RUN apt-get install -y python && \
  apt-get install -y pkg-config && \
  apt-get install -y build-essential && \
  apt-get install -y manpages-dev && \
  apt-get install -y libx11-dev && \
  apt-get install -y libxkbfile-dev && \
  apt-get install -y libsecret-1-dev && \
  apt-get install -y fakeroot && \
  apt-get install -y rpm

RUN gcc --version

# install vscode
RUN  git clone https://github.com/microsoft/vscode && \
  cd vscode && \
  yarn install && \
  pwd && ls

WORKDIR /usr/src/vscode

#start vscode
CMD ["yarn", "web"]