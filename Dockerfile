FROM node:16.13.2-alpine3.14

WORKDIR /app

RUN npm i -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

EXPOSE 3000

CMD [ "pnpm", "start" ]