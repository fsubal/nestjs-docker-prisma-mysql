![Nest Logo](https://nestjs.com/img/logo-small.svg)

[![Node.js Testing](https://github.com/fsubal/nestjs-docker-prisma-mysql/actions/workflows/test.yml/badge.svg)](https://github.com/fsubal/nestjs-docker-prisma-mysql/actions/workflows/test.yml)

[![Static analysis checking](https://github.com/fsubal/nestjs-docker-prisma-mysql/actions/workflows/check.yml/badge.svg)](https://github.com/fsubal/nestjs-docker-prisma-mysql/actions/workflows/check.yml)

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Setup

```bash
# install
$ yarn

# run containers
$ yarn up

# setup database ( sync database schema )
$ docker exec -it app yarn db:apply

# insert seed data
$ docker exec -it app yarn db:seed
```

Currently HMR is not enabled, so the server will reload on every file change.

## Migration (Development)

Log in to the `app` container and run

```bash
$ docker exec -it app yarn db:migrate:dev
```

## Test

```bash
# unit tests
$ docker exec -it app yarn test

# e2e tests
$ docker exec -it app yarn test:e2e

# test coverage
$ docker exec -it app yarn test:cov
```
