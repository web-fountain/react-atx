# Babel

Set up BabelJS to work with ReactJS & TypeScript

Checkout out the file `_babelrc.json` to see extended options

### Resources

* https://babeljs.io/docs/en/babel-core
* https://babeljs.io/docs/en/babel-plugin-transform-runtime
* https://babeljs.io/docs/en/babel-runtime
* https://github.com/zloirock/core-js#babel
* https://babeljs.io/docs/en/babel-preset-typescript
* https://babeljs.io/docs/en/babel-preset-react
* https://babeljs.io/docs/en/babel-preset-env

# ESLint

Set up ReactJS w/ TypeScript and ESLint

### Resources

* https://eslint.org/docs/user-guide/configuring/
* https://github.com/yannickcr/eslint-plugin-react
* https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
* https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md
* https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin

# TypeScript

Set up ReactJS w/ TypeScript

Checkout the file `_tsconfig.json` to get a list of options to configure TypeScript

### Resources

* https://www.typescriptlang.org/
* https://www.typescriptlang.org/tsconfig

# React

Basic set up of ReactJS w/ JSX

### Resources

* https://reactjs.org/docs/add-react-to-a-website.html
* https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605

# Webpack

* https://github.com/webpack/webpack
* https://github.com/webpack/webpack-cli
* https://github.com/webpack/webpack-dev-server
* https://github.com/jantimon/html-webpack-plugin
* https://github.com/TypeStrong/ts-node
* https://github.com/TypeStrong/fork-ts-checker-webpack-plugin
* https://github.com/webpack-contrib/eslint-webpack-plugin
* https://github.com/babel/babel-loader

# Hot-Reload

Enable React Refresh for hot module reloading

> Unable to use the old & new hot loaders because of webpack 5 issue

### Resources

#### `react-hot-loader`

* https://github.com/gaearon/react-hot-loader
* https://github.com/gaearon/react-hot-loader#setconfigconfig
* https://github.com/hot-loader/react-dom

#### `react-refresh`
* https://github.com/pmmmwh/react-refresh-webpack-plugin

----

### Issues

* https://github.com/webpack/webpack/issues/12408

### Issues

* [Webpack 4 - long term caching](https://github.com/tpai/tpai.github.io/issues/93)
* [HMR/Live Reloading broken after Webpack 5 rc.0 -> rc.1 update](https://github.com/webpack/webpack-dev-server/issues/2758)


# Website Endpoints

## Join
POST /join
payload: { email: myEmail@example.com }
requirements:
- only one submission is allowed
  - must disable the join after submission
  - if user naviagates to another page and comes back, a cookie is used to check if they have submitted or not
  - if user clears cookies and submits again, server checks cache if email exists and returns a 200 to show OK
  - throttle after multiple same-submissions within time interval
  - throttle after multiple submissions with same IP within same time interval
