FROM node:latest

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

COPY . .

RUN npm run build

FROM nginx:latest

COPY dist khonhai:/var/www/app

COPY nginx.conf /etc/nginx/nginx.conf

# CMD [ "nginx", "-g", "daemon off" ]
