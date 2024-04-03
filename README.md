# Kellton recruitment task

## Description

This project was created for purposes of recruitment task. It's not prepared for production environment, including CI/CD and release config (like icons, keys etc.)

Project is using [Rebrickable API](https://rebrickable.com/api/v3/docs/?key=), to use project properly, you will have to generate your own **API_KEY** and paste it into **.env** file

## Prerequisites

- Your [node](https://nodejs.org/en/download/current) version needs to be greater or equal to **18**
- Since project is using [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) as a package manager, you need to have it installed on your local machine
- You need to have [ruby](https://www.ruby-lang.org/en/documentation/installation/) installed with version **2.6.10** or greater

Also please follow setup instruction prepared by official [react-native](https://reactnative.dev/docs/environment-setup) documentation

## How to run the project for the first time

### Setup

Just run:
```bash
yarn bootstrap
```
And you are good to go

This will install gems, pods and node_modules.

This will also automatically create **.env** file as a copy of **.env.example**.

### Working with project

Project is prepared for both **Android** and **iOS** (including iPads and Android Tablets)

To run the project on target device:

Run:
```bash
yarn start // or
yarn start-reset-cache
```
To start watchman

### iOS
Run:
```bash
yarn ios
```
And this will launch app on iOS simulator

### Android
Run:
```bash
yarn android
```
And this will launch app on android emulator

## If something went wrong...

Run:
```bash
yarn clean
```

This will remove node_modules, pods and any build output

Then run ***yarn bootstrap*** again


## Available commands

**bootstrap** - setup gems, pods and node_modules, should be used only after cleanup, or first repository initialization

**install-dependencies** - installs pods and node_modules

**gem-init** - installs gems

**yarn** - installs dependencies

**pod-install** - installs pods

**start** - starts watchman

**start-reset-cache** - starts watchman with cache reset (useful for example, after changing values in .env file)

**lint** - runs eslint check on files in **./src** folder

**lint-debug** - runs lint with debug options

**ts-compile** - runs TypeScript check based on `tsconfig.json`

**pre-push-lint** - runs linter on pre-push

**pre-push** - used to run codestyle on pre-push using [husky](https://typicode.github.io/husky/)

**prettier/prettier-check** - runs prettier

**clean** - clean node_modules, pods and any android/ios output files

## Codestyle

Tools used for code style and linting:

- [Prettier](https://prettier.io/docs/en/)
- [Eslint](https://eslint.org/docs/latest/use/getting-started)
- [TypeScript Compiler](https://www.typescriptlang.org/docs/handbook/compiler-options.html)