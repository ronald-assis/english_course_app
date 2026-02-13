# Node + production image for Next.js
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* .npmrc* ./ 2>/dev/null || true
RUN npm i -g pnpm@10.29.2 && pnpm i --frozen-lockfile || pnpm i

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY package.json ./package.json
RUN npm i -g pnpm@10.29.2 && pnpm i --prod --frozen-lockfile || true
EXPOSE 3000
CMD ["pnpm","start","-p","3000"]
