FROM node:18

COPY package.json package-lock.json $WORKING_DIR/

# Fixes problem with watching files for local Dev
RUN echo fs.inotify.max_user_watches=524288 | tee -a /etc/sysctl.conf
RUN npm install --no-save

EXPOSE 3000

CMD [ "npm", "run dev" ]