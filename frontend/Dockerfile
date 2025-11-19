FROM node:18

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install --silent

# Copy source
COPY . /app

ENV HOST=0.0.0.0
EXPOSE 5173

CMD ["npm", "run", "dev"]
