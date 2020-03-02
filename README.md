# [egg-compress](#) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/chiaweilee/egg-compress/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/egg-compress.svg?style=flat)](https://www.npmjs.com/package/egg-compress) [![npm downloads](https://img.shields.io/npm/dm/egg-compress.svg)](https://npmcharts.com/compare/egg-compress?minimal=true) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

Support index.html for egg-static.

* **compress** base on `@koa/compress`.

## Installation

```
npm install egg-compress
```

```js
// config/plugin.js
exports.index = {
  enable: true,
  package: 'egg-compress',
};
```

## Configuration

```js
exports.compress = {};
```
