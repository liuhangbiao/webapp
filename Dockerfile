# webapp
# VERSION   1.0.0
FROM node:9.11.1-alpine
MAINTAINER liuhangbiao(.com)
WORKDIR /mnt/webapp
ADD . /mnt/webapp
RUN npm install --registry=https://registry.npm.taobao.org
#USER node
EXPOSE 9000

CMD ["npm","start"]
# FROM node:9.11.1-alpine
# MAINTAINER liuhangbiao(.com)
# RUN mkdir -p /mnt/webapp
# # Create webapp directory
# WORKDIR /mnt/webapp
# # Install webapp dependencies
# COPY package.json /mnt/webapp
# RUN npm install
# # Bundle webapp source
# COPY  . /mnt/webapp
# EXPOSE 9000
# CMD [ "npm", "start" ]