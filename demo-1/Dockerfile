FROM node
COPY . /usr/src
WORKDIR /usr/src
RUN cat index.js
RUN npm install
CMD ["node", "index.js"]