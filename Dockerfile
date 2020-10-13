FROM node:8.10.0-alpine

# Set a working directory
WORKDIR /usr/src/app

# Copy application files
COPY . .

# Install Node.js dependencies
RUN yarn install --production --no-progress

# Set NODE_ENV env variable to "production"
ENV NODE_ENV production

# Building app which creates the build artifacts inside ./build
RUN yarn build

# TODO: Run web-server
