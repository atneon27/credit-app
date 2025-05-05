# node alpine image
FROM node:23-alpine

# creating a working directory
WORKDIR /app

# copying package.json and installing dependencies
COPY package*.json ./
RUN npm install

# copying the rest of the files and generating prisma schema
COPY . .
RUN npx prisma generate client

# building the application
RUN npm run build
EXPOSE 3000

# starting the application
CMD ["node", "dist/index.js"]