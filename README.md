# Microservice - Pet Store

Using the Swagger editor pet store example specification, this repo contains microservices built with NodeJs/Express/Typescript.

## Docker Commands

Docker Compose - `docker-compose up --force-recreate --build -d`

Pet Image - `docker build -t pet_image -f ./packages/pet/docker/Dockerfile .`

Store Image - `docker build -t store_image -f ./packages/store/docker/Dockerfile .`

User Image - `docker build -t user_image -f ./packages/user/docker/Dockerfile .`

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