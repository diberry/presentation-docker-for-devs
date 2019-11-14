# takes 10 minutes to build

docker build --no-cache  -t demo2  . 
docker run -it --rm -p 127.0.0.1:8443:8443 -e PASSWORD='dina' demo2