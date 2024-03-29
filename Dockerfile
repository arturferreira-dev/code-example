FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY build ./build
EXPOSE 3000
CMD ["npm", "run", "start"]