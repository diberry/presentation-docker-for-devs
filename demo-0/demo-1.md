# View docker images

docker images
# Run hello world

winpty docker run --rm hello-world

# View docker comtainers (from images)

docker ps -a

# View docker containers running

docker ps

# Stop all containers

docker kill $(docker ps -q)

# Remove all containers

docker rm $(docker ps -a -q)

# Remove all docker images

docker rmi $(docker images -q)