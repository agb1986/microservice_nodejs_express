# Microservice - Pet Store

Using the Swagger editor pet store example specification, this repo contains microservices built with NodeJs/Express/MongoDB/Typescript.

## TODO

- `store` fully implemented.
- `user` fully implemented.
- Custom exception handling
- Returning correct status codes for situation


## Docker Commands

Docker Compose - `docker-compose up --force-recreate --build -d`

Pet Image - `docker build -t pet -f ./packages/pet/docker/Dockerfile .; docker run --rm -d -p 8001:8001/tcp pet`

Store Image - `docker build -t store -f ./packages/store/docker/Dockerfile .; docker run --rm -d -p 8002:8002/tcp store`

User Image - `docker build -t user -f ./packages/user/docker/Dockerfile .; docker run --rm -d -p 8003:8003/tcp user`

Mongo Image - `docker build -t mongo -f ./data/Dockerfile .; docker run --rm -d -p 27017:27017/tcp mongo`

## Random JSON Data

Data generated @ https://json-generator.com/

**PETS**
```javascript
[
  '{{repeat(100)}}',
  {
    id: '{{objectId()}}',
    name: '{{firstName()}}',
    status: function () {
      var status = ['AVAILABLE', 'UNAVAILABLE'];
      return status[Math.floor((Math.random()*status.length))];
    },
    photos: [
      '{{email()}}',
      '{{email()}}',
      '{{email()}}'
    ],
    category: {
      id: '{{index()}}',
      name: '{{lorem([1])}}'
    },
    tags: [
      '{{repeat(3)}}',
      {
        id: '{{index()}}',
        name: '{{lorem([1])}}'
      }
    ]
  }
]
```