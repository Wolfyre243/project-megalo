FROM node:20

# ENV NODE_ENV production

COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4320
CMD npm run start