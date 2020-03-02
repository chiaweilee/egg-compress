'use strict';

module.exports = (options) => {
  const compress = require('koa-compress')(options);
  return async (ctx, next) => {
    ctx.compress = true;
    return compress(ctx, next);
  };
};
