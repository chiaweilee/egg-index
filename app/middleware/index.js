'use strict';

const fs = require('fs');
const path = require('path');

module.exports = ({ prefix, dir }) => {
  return function index(ctx, next) {
    if (ctx.url === prefix) {
      const file = path.join(dir, 'index.html');

      if (fs.existsSync(file)) {
        ctx.body = fs.readFileSync(file, 'utf-8');
        return;
      }
    }

    return next();
  };
};
