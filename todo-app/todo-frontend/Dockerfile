
FROM node:16
WORKDIR /usr/src/app

ENV REACT_APP_BACKEND_URL=http://localhost:3000
COPY . .

RUN npm ci

ENV CI=true 
RUN npm test
RUN npm run build

CMD npm run start
