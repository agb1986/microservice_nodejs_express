# Microservice - Pet Store

Using the Swagger editor pet store example specification, this repo contains microservices built with NodeJs/Express/Typescript.

## Docker Commands

Docker Compose - `docker-compose up --force-recreate --build -d`
Pet Image - `docker build -t pet_image -f ./packages/pet/docker/Dockerfile .`
Store Image - `docker build -t store_image -f ./packages/store/docker/Dockerfile .`
User Image - `docker build -t user_image -f ./packages/user/docker/Dockerfile .`