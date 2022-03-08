FROM node:lts-alpine

WORKDIR /dockerdeneme2

COPY package.json . 

RUN npm install

COPY . .

CMD ["npm","start"]
