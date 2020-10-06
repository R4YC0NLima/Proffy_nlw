FROM node:alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn install

EXPOSE 3333 9209

CMD ["yarn", "start"]