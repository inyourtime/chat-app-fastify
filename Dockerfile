FROM node:20-alpine

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy app source code
COPY . .

EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]

