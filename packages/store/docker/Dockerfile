FROM node:16-alpine3.15

RUN npm install -g typescript

WORKDIR /usr/app

COPY /packages/store/ /usr/app/

RUN npm install
RUN tsc

EXPOSE 8002

CMD [ "npm", "start" ]
