# DevDays AXE-CORE

A sampel project to enable AXE-CORe in your Vue application.

The following tools are used:

- Vue3
- Vite (Compiler & Dev Server)
- Vitest (Unit testing)
- Vue Router

For end-to-end testing we use:

- Cypress

For accessibility we use the following plugins:
- vitest-axe
- cypress-axe

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Prerequisites

Ensure that you are using the Node version specified in the `.nvmrc` file in the root of the project

## Run application

Install the dependencies and devDependencies and start the server.

### Run application

```sh
npm i
npm run dev
```

### Run the vitest (unit-tests) and accessibility component test

```sh
npm run test
```

If there are any accessibility violations found then an html file is generated in the `reports` folder.

### Run the cypress (component-tests)

```sh
npx cypress open
```

### Build

In order to build the project:

```sh
npm run build
```