# Cytracom React Template

> React Project Boilerplate

### Getting Started

This project uses `@cytracom/telos` so you will need to make sure you add the following to your `~/.npmrc`

```
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PERSONAL_ACCESS_TOKEN_HERE
```

### Development

- Within the root folder
  - `yarn install`
  - `yarn storybook` will start the isolated development sandbox (usable for both root and `app` folder)
  - `yarn build` will compile the library portion of the project to be used by the `app` folder
- Within the `app` folder
  - `yarn isntall`
  - `yarn dev` for local development of the project with fast refresh
  - `yarn build` for compiling the NextJS app for production use
  - `yarn start` for running the compiled NextJS app
