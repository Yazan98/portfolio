# pull official base image
FROM node:14.17.2-alpine3.12

# set working directory
WORKDIR /app

ADD package.json .
ADD package-lock.json .

RUN npm install

ADD . .

CMD ["npm", "run", "start"]
