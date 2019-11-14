# docker build --no-cache  -t ubuntu-python  . 
# docker run -it --rm ubuntu-python
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

# Install Python 2.x
RUN apt-get install -y python

# Install Python 3.x
RUN apt-get install -y python3

CMD [ "python3", "--version"]

