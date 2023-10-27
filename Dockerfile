FROM node:20

USER node
WORKDIR /home/node/app

COPY --chown=node:node package.json package-lock.json ./

RUN npm ci
ENV PATH=$PATH:/home/node/app/node_modules/.bin

COPY --chown=node:node . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
