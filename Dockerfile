FROM node

COPY config.json commands events deploy-commands.js index.js package.json package-lock.json ./

RUN npm install
RUN node deploy-commands.js
RUN node .