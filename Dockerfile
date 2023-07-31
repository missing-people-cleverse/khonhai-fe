FROM nginx:latest

COPY ./dist /usr/share/nginx/html

RUN mkdir /etc/nginx/includes

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/includes/servers.conf /etc/nginx/includes/servers.conf
