# [egg-index](#) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/chiaweilee/egg-index/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/egg-index.svg?style=flat)](https://www.npmjs.com/package/egg-index) [![npm downloads](https://img.shields.io/npm/dm/egg-index.svg)](https://npmcharts.com/compare/egg-index?minimal=true) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

Support index.html for egg-static.

* **egg-static** base on koa/static-cache.
* **koa/static-cache:** no directory or index.html support.
* **egg-index:** support index.html for egg-static

## Installation

```
npm install egg-index
```

```js
// config/plugin.js
exports.index = {
  enable: true,
  package: 'egg-index',
};
```

## Configuration

```js
exports.static = {
  prefix: '/'
  dir: path.resolve('./myWeb'),
};
```

*Now, available to access ./myWeb/index.html from '/'*
