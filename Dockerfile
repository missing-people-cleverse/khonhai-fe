# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:latest as build-stage
WORKDIR /app

COPY . .

RUN npm install
ENV VITE_BE_URL="https://api.khonhai.cleverse.academy"
RUN npm run build

# Out dist should be at /app/dist

# NGINX
FROM nginx:latest

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html


# FROM nginx:latest

# COPY ./dist /usr/share/nginx/html

# RUN mkdir /etc/nginx/includes

# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# COPY ./nginx/includes/servers.conf /etc/nginx/includes/servers.conf
