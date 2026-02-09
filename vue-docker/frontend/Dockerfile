FROM node:24-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 5173

# --host がないとコンテナ外からのアクセス不可
CMD ["npm", "run", "dev", "--", "--host"]