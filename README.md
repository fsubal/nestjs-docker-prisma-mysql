# nestjs-docker-prisma-mysql

[![Node.js Testing](https://github.com/fsubal/nestjs-docker-prisma-mysql/actions/workflows/test.yml/badge.svg)](https://github.com/fsubal/nestjs-docker-prisma-mysql/actions/workflows/test.yml)
[![Static analysis checking](https://github.com/fsubal/nestjs-docker-prisma-mysql/actions/workflows/check.yml/badge.svg)](https://github.com/fsubal/nestjs-docker-prisma-mysql/actions/workflows/check.yml)

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

Application template for [NestJS](https://github.com/nestjs/nest) + Docker + Prisma + MySQL

## Setup

```bash
# install
$ yarn

# Setup env file for database
$ cp prisma/.env.example prisma/.env

# run containers
$ yarn dev

# setup database ( sync database schema )
$ docker exec -it app yarn db:apply

# insert seed data
$ docker exec -it app yarn db:seed
```

Currently HMR is not enabled, so the server will reload on every file change.

## Use Prisma Studio

You can view / edit DB tables using [Prisma Studio](https://www.prisma.io/studio).

Once you run `yarn dev`, you can open it in `http://localhost:5555`.

## Migration (Development)

Log in to the `app` container and run

```bash
$ docker exec -it app yarn db:migrate:dev
```

## Swagger

Swagger UI is available on `http://localhost:3000/api`

## Test

```bash
# unit tests
$ docker exec -it app yarn test

# e2e tests
$ docker exec -it app yarn test:e2e

# test coverage
$ docker exec -it app yarn test:cov
```
