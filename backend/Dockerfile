# Dockerfile for the node  server service
FROM node:20.10-alpine

#set the working directory
WORKDIR /app

#copy the package.jason file and package lock.jason
COPY package*.jason ./

#copy the rest of the aplication file
COPY . .

# nodemon globly install
RUN npm install -g nodemon

#exporse the port your app will run on
EXPOSE 5000

#start the application
CMD [ "npm", "start" ]
