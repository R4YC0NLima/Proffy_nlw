FROM node:alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn install
RUN yarn add openssl req -nodes -new -x509 -keyout certificado.key -out certificado.cert

EXPOSE 3333 9209

CMD ["yarn", "start"]