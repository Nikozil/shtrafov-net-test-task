FROM node

WORKDIR /app

COPY package.json /app

RUN npm install 

COPY . .

RUN npm run build && npm install --production --ignore-scripts --prefer-offline


ENV PORT 4000

EXPOSE $PORT

CMD ["npm", "start"]
