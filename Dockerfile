FROM node:18

USER node
WORKDIR /home/node/app

COPY --chown=node:node package.json package-lock.json ./

RUN npm install --no-save

COPY --chown=node:node . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run start" ]