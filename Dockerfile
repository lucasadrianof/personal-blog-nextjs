FROM node:18

COPY package.json package-lock.json $WORKING_DIR/

RUN npm install --no-save

EXPOSE 3000

CMD [ "npm", "run dev" ]