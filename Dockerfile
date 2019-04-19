FROM node:9.11.1-alpine
MAINTAINER liuhangbiao(.com)

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 9000
CMD [ "npm", "start" ]

# docker build -t <your username>/node-web-app .
# docker images
# docker run -p 8080:9000 -d <your username>/node-web-app
# Get container ID=>$ docker ps
# Print app output=>$ docker logs <container id>
# Example=>Running on http://localhost:9000
# Enter the container=>$ docker exec -it <container id> /bin/bash
# curl -i localhost:8080
