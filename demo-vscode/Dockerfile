# docker build --no-cache  -t vscode  . 
# docker run -it --rm -p 127.0.0.1:8080:8080  vscode
# winpty docker exec -it 3bc2c984850d /bin/bash
# docker rm $(docker ps -a -f status=exited -q)
FROM ubuntu:latest

RUN  apt-get update && \
  apt-get install -y apt-utils && \
  apt-get install -y gnupg2 && \
  apt-get install -y curl && \
  apt-get install -y git

# yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update

RUN apt-get install -y yarn

WORKDIR /usr/src/
RUN git clone https://github.com/microsoft/vscode && cd vscode 

CMD ["yarn", "web"]