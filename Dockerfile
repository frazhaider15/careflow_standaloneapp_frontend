# Use the official Node.js 18 Alpine image as base
FROM node:18-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the application files from the local directory to the working directory in the container
COPY . .

# Run the build script defined in package.json using npm
#RUN npm run build

# Expose port 8080 to the outside world (for web traffic)
EXPOSE 3000

# Install serve globally to serve the built application
#RUN npm install -g serve

# Specify the command to run when the container starts
#CMD ["serve", "-s", "dist"]
CMD ["npm", "start"]
