FROM node:16 as build
WORKDIR /usr/src/next-example
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:16
WORKDIR /usr/src/next-example
COPY package.json .
COPY package-lock.json .
RUN npm install --prod
COPY --from=build /usr/src/next-example/.next ./.next
COPY --from=build /usr/src/next-example/public ./public
EXPOSE 3000
CMD npm run start