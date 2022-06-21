FROM node:14
WORKDIR /services-events
EXPOSE 3006
COPY . .
RUN npm install
ENTRYPOINT npm run dev