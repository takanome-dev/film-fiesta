# Stage 1: Build stage

# FROM node:16.14-alpine3.15 AS build-stage

# WORKDIR /app

# COPY package.json ./

# RUN yarn install

# COPY . .

# ENV REACT_APP_API_URL=http://143.198.110.90:3001/api

# RUN yarn run build

# Stage 2: Production

FROM nginx:1.21.6-alpine

# COPY --from=build-stage /app/build /usr/share/nginx/html
COPY /build /usr/share/nginx/html

COPY /config /etc/nginx/conf.d

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]