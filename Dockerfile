FROM node:latest

RUN mkdir /app

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY . ./app

EXPOSE 4000

CMD ["yarn", "start"]
