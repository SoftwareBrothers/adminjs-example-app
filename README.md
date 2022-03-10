## AdminJS-example-app

Example application using [adminjs](https://github.com/SoftwareBrothers/adminjs)

## Demo

You can check out the current demo version at: https://admin-bro-example-app-staging.herokuapp.com/admin/login

login: test@example.com  
password: password

## Prerequisites

To run the demo locally you have to have installed:

* mongodb
* postgresql

or run `docker-compose up`

Also in ENV you have to have following entries:

* MONGO_URL
* PORT - default to 3000
* POSTGRES_USER
* POSTGRES_PASSWORD
* POSTGRES_PORT - default to 5432
* POSTGRES_DATABASE - default to 'adminjs'
* POSTGRES_HOST - default to 'localhost'
* TYPEORM_USERNAME
* TYPEORM_PASSWORD
* TYPEORM_PORT - default to 5432
* TYPEORM_DATABASE - default to 'adminjs'
* TYPEORM_HOST - default to 'localhost'

## Starting the app

First, install all dependencies

```
yarn install
```

Make sure you have all environmental variables set up (read the previous paragraph).

Then create postgres database and run migrations:

```
yarn sequelize db:migrate
yarn typeorm migration:run
yarn mikro-orm migration:up
npx prisma migrate dev --schema src/sources/prisma/schema.prisma
```

In the end, you can launch the app

```
yarn start:dev
```

## Developing the app

The best way of developing the app is to do this via https://github.com/SoftwareBrothers/adminjs-dev.


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
- `npx prisma migrate dev --schema src/sources/prisma/schema.prisma`

## License

AdminJS is Copyright © 2018 SoftwareBrothers.co. It is free software, and may be redistributed under the terms specified in the [LICENSE](LICENSE) file.

## About SoftwareBrothers.co

<img src="https://softwarebrothers.co/assets/images/software-brothers-logo-full.svg" width=240>

We’re an open, friendly team that helps clients from all over the world to transform their businesses and create astonishing products.

* We are available to [hire](https://softwarebrothers.co/contact).
* If you want to work for us - check out the [career page](https://softwarebrothers.co/career).
