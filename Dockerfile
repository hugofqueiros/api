FROM alpine:3.5

# File Author / Maintainer
LABEL authors="Hugo Queiros <hugofqueiros@gmail.com>"

# Update & install required packages
RUN echo 'update and install packages'
RUN apk add --update nodejs bash git
#FROM node:6.9.1
RUN npm install -g yarn

# Install app dependencies
RUN echo 'Install app dependencies'
COPY package.json /www/package.json
COPY yarn.lock /www/yarn.lock
# RUN cd /www; npm install
RUN cd /www; yarn install

# Copy app source
COPY . /www

# Set work directory to /www
RUN echo 'Set work directory to /www'
WORKDIR /www

# set your port
ENV PORT 4040

# expose the port to outside world
EXPOSE  4040

# start command as per package.json
RUN echo 'Start'
CMD ["npm", "start"]
