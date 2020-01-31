## Create image from Dockerfile

docker build --no-cache -t camp-demo-1 .

## Run container from image without environment variables ( 2 + 2)

docker run --rm camp-demo-1

## Run container from image with environment variables, 3 + 3

docker run --rm -e "FIRST=3" -e "SECOND=3" camp-demo-1
