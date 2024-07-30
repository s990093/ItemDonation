# Dockerfile for Next.js

# Use the official Node.js image from the Docker Hub
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the project
COPY . .

# Build the project
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "start"]
