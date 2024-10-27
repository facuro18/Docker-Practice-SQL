FROM node:20

WORKDIR /myapp

COPY package.json .

RUN npm install

COPY . .


# ENV NODE_ENV=development

# EXPOSE 4001

CMD npm start