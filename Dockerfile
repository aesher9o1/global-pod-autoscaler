FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Stage 2 - Final image
FROM node:18-alpine AS final

# Set working directory
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

# Copy built application from build stage
COPY --from=build /app/dist ./dist

# Apply security best practices
RUN addgroup -S nodejs \
    && adduser -S -g nodejs nodejs \
    && chown -R nodejs:nodejs /app \
    && chmod -R 755 /app \
    && chmod -R g+s /app \
    && find /app -type d -exec chmod g+s {} +


EXPOSE 3000

# Start application
USER nodejs
CMD ["npm", "run", "start:prod"]