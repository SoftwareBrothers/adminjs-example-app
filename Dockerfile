FROM node:22-bookworm-slim AS base

WORKDIR /admin

ENV TZ="UTC"

RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates openssl \
    && rm -rf /var/lib/apt/lists/*

FROM base AS build

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production=false
COPY . .

RUN yarn prisma generate && yarn build
RUN yarn install --frozen-lockfile --production --ignore-scripts \
    && yarn cache clean

FROM base AS production

ENV NODE_ENV="production"
ENV PORT="3000"

COPY --from=build /admin/package.json /admin/yarn.lock ./
COPY --from=build /admin/node_modules ./node_modules
COPY --from=build /admin/dist ./dist
COPY --from=build /admin/public ./public
COPY --from=build /admin/prisma ./prisma

RUN mkdir .adminjs && chown node:node .adminjs
USER node

EXPOSE 3000
CMD ["node", "dist/index.js"]
