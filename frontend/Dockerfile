FROM node:20.10-alpine

WORKDIR /app

COPY package*.jason ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]