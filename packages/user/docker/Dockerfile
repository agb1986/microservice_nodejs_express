FROM node:16-alpine3.15

RUN npm install -g typescript

WORKDIR /usr/app

COPY /packages/user/ /usr/app/

RUN npm install
RUN tsc

EXPOSE 8003

CMD [ "npm", "start" ]
