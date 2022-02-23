FROM node:16.13.2-alpine3.14

RUN addgroup app && adduser -S -G app app

# https://stackoverflow.com/questions/45972608/how-to-give-folder-permissions-inside-a-docker-container-folder#45973108

WORKDIR /app

RUN chown -R app:app /app

RUN chmod 777 /app

USER app

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]