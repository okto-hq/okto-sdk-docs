FROM node:20
RUN mkdir okto-docs
WORKDIR /okto-docs
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]