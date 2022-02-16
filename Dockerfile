FROM node:16.13.2-alpine3.14

RUN addgroup app && adduser -S -G app app

USER app

WORKDIR /app

RUN mkdir data

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]