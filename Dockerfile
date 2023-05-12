FROM node:20

USER node
WORKDIR /home/node/app

COPY --chown=node:node package.json package-lock.json ./

RUN npm install --no-save
ENV PATH=$PATH:/home/node/app/node_modules/.bin

COPY --chown=node:node . .

RUN turbo build

EXPOSE 3000

CMD [ "turbo", "start" ]