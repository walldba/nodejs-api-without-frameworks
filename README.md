# Building a complete Node.js Api + testing without frameworks

## Index

- [About](#about)
- [Checklist](#usage)
- [Postman](#postman)

## About

This project is based on Erick Wendel's [Video](https://www.youtube.com/watch?v=xR4D2bp8_S0).

The idea of this project is to build a NodeJS API using only native libs and without any frameworks. I expect to improve my acknowledge about NodeJS native libs and undestand more how the famous HTTP frameworks works internally.

## Checklist

- Web API

  - [x] it should have an endpoint for storing heroes' data
  - [x] it should have an endpoint for retrieving heroes' data
  - [x] it should have an endpoint for updating heroes' data
  - [ ] it should have an endpoint for deleting heroes' data
  - [ ] it should test when the application throws an error

- Testing

  - Unit

    - [ ] it should test all files on the routes layer
    - [ ] it should test all files on the repositories layer
    - [ ] it should test all files on the factories layer
    - Plus
      - [ ] it should reach 100% code coverage (it's currently not possible to get code coverage metrics using only the native Node.js, see [c8](https://www.npmjs.com/package/c8) for this task)

  - Integration / E2E
    - [x] it should test the endpoint for storing heroes' data
    - [x] it should test the endpoint for retrieving heroes' data
    - [ ] it should test the endpoint for updating heroes' data
    - [ ] it should test the endpoint for deleting heroes' data
    - [ ] it should test when the application throws an error

## Postman

Download the postman collection file [here](/docs/postman/api-without-frameworks.postman_collection.json)

This collection has the Heroes endpoints.

## Have fun!
