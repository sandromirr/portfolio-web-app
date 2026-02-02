FROM node:20-slim
WORKDIR /app

# Install server deps
COPY server/package.json server/package-lock.json* ./server/
RUN cd server && npm install --omit=dev

# Copy server source
COPY server ./server

# Copy built client
COPY client/dist ./client/dist

ENV NODE_ENV=production
ENV PORT=8080

CMD ["node", "server/index.js"]