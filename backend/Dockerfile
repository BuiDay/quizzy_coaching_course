FROM node:18-alpine

WORKDIR /quizzy_coaching_coach/backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm","run","dev"]

