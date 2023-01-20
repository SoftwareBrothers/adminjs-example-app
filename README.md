## AdminJS-example-app

Example application using [adminjs](https://github.com/SoftwareBrothers/adminjs)

## Demo

You can check out the current demo version at: https://adminjs-demo.herokuapp.com

login: admin@example.com  
password: password

## Prerequisites

Install Docker if you don't have it: https://docs.docker.com/desktop/#download-and-install

Run:
```bash
$ docker-compose up -d
```
to setup databases.

Make sure your `.env` file is configured. If you didn't do any changes to `docker-compose.yml` file,
the default contents of the `.env` file should work for you.

## Starting the app

First, install all dependencies

```bash
yarn install --frozen-lockfile
```

Make sure you have all environmental variables set up (read the previous paragraph).

Then create postgres database and run migrations:

```bash
$ npx prisma generate     # # this sets up Prisma Client in your node_modules
$ yarn migration:up
```

Note: If you see the error below when Prisma MySQL migration is run:
```
Error: P1017: Server has closed the connection.
```
Please wait a minute or two for the MySQL server to start and retry.

In the end, you can launch the app

```bash
$ yarn build:watch      # keep it running if developing
$ yarn start:dev        # in a separate terminal tab, concurrently
```

By default the app will be available under: `http://localhost:3000/admin`

## Developing the app

The best way of developing the app is to do this via https://github.com/SoftwareBrothers/adminjs-dev.

Alternatively, you can fork and clone each repository separately and link them using:

* `yarn link`
* `npm link`

to see your local changes.

#### Sequelize
##### migrations
- `yarn sequelize migration:generate --name init`
- `yarn sequelize db:migrate`
- `yarn sequelize db:migrate:undo`

#### Typeorm
##### migrations
- `yarn typeorm migration:generate -n init`
- `yarn typeorm migration:run`
- `yarn typeorm migration:revert`


#### mikro-orm
##### migrations
- `yarn mikro-orm migration:create`
- `yarn mikro-orm migration:up`
- `yarn mikro-orm migration:down`

#### prisma
- `npx prisma migrate dev --schema prisma/schema.prisma`

## License

AdminJS is copyrighted © 2023 rst.software. It is a free software, and may be redistributed under the terms specified in the [LICENSE](LICENSE.md) file.

## About rst.software

<img src="https://pbs.twimg.com/profile_images/1367119173604810752/dKVlj1YY_400x400.jpg" width=150>

We’re an open, friendly team that helps clients from all over the world to transform their businesses and create astonishing products.

* We are available for [hire](https://www.rst.software/estimate-your-project).
* If you want to work for us - check out the [career page](https://www.rst.software/join-us).
