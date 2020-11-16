## Admin-bro-example-app

Example application using [admin-bro](https://github.com/SoftwareBrothers/admin-bro)

## Demo

**THIS IS NO LONGER A DEMO APP**  
Demo source has been migrated to https://github.com/SoftwareBrothers/admin-bro/tree/master/packages/admin-bro-demo  
You can check out the current demo version at: https://admin-bro-app.firebaseapp.com/admin

login: admin@example.com  
password: password

## Prerequisites

To run the demo locally you have to have installed:

* mongodb
* postgresql

Also in ENV you have to have following entries:

* MONGO_URL
* PORT - default to 8080
* POSTGRES_USER
* POSTGRES_PASSWORD
* POSTGRES_PORT - default to 5432
* POSTGRES_DATABASE - default to 'database_development'
* POSTGRES_HOST - default to 'postgres'

there is a .env-example file in the repo, which can be used as a reference.

## Starting the app

First, install all dependencies

```
yarn install
```

Make sure you have all environmental variables set up (read the previous paragraph).

Then create postgres database and run migrations:

```
yarn run sequelize db:create
yarn run sequelize db:migrate
```

In the end, you can launch the app

```
yarn start
```

## Developing the app

The best way of developing the app is to do this via https://github.com/SoftwareBrothers/admin-bro-dev.

## License

AdminBro is Copyright © 2018 SoftwareBrothers.co. It is free software, and may be redistributed under the terms specified in the [LICENSE](LICENSE) file.

## About SoftwareBrothers.co

<img src="https://softwarebrothers.co/assets/images/software-brothers-logo-full.svg" width=240>


We’re an open, friendly team that helps clients from all over the world to transform their businesses and create astonishing products.

* We are available to [hire](https://softwarebrothers.co/contact).
* If you want to work for us - check out the [career page](https://softwarebrothers.co/career).
