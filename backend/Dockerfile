# Dockerfile for the node  server service
FROM node:20.10-alpine

#set the working directory
WORKDIR /app

#copy the package.json file and package lock.json
COPY package*.json ./

#before install nodemon Globally
RUN npm install

# nodemon globly install
RUN npm install -g nodemon

#copy the rest of the aplication file
COPY . .

#exporse the port your app will run on
EXPOSE 5000

#start the application
CMD [ "npm", "start" ]
