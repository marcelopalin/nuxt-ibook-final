### STAGE 1: Build ###
FROM node:14.18.0-alpine as build
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN apk update && apk upgrade
RUN apk add git
RUN apk add python3
# copy the app, note .dockerignore
COPY . /usr/src/app/
RUN npm install
ENV HOST 0.0.0.0
EXPOSE 3000
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm run generate

### STAGE 2: NGINX ###
FROM nginx:stable-alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
