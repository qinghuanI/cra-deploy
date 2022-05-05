FROM node:14-alpine as builder

WORKDIR /code

ADD package.json package-lock.json /code/

RUN npm ci

ADD public /code/public
ADD src /code/src

RUN npm run build

FROM nginx:alpine
ADD nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder code/build /usr/share/nginx/html