FROM mhart/alpine-node:9.5.0
ADD package.json /tmp/package.json
RUN cd /tmp && npm i && ls
RUN mkdir /app && cp -a /tmp/node_modules /app/
WORKDIR /app
ADD . /app
EXPOSE 3000
CMD npm start