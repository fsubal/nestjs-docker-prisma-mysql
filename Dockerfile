FROM node
RUN mkdir -p /app
WORKDIR /app

ADD . ./
RUN yarn install --immutable
