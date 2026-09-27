FROM node:22-alpine

WORKDIR /app

RUN npm install -g @quasar/cli

EXPOSE 8080

CMD ["sh", "-c", "npm install && npx quasar dev"]