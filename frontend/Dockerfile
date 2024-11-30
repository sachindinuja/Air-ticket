FROM node:20.10-alpine

WORKDIR /app

COPY package*.jason ./

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]