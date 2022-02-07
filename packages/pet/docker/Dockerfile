FROM node:16-alpine3.15

RUN npm install -g typescript

WORKDIR /usr/app

COPY /packages/pet/ /usr/app/

RUN npm install
RUN tsc

EXPOSE 8001

CMD [ "npm", "start" ]
