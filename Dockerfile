FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

COPY . .

RUN npm build

CMD [ "npm", "run", "dev" ]

EXPOSE 8000