"use strict";

const path = require("path");

module.exports = ({ prefix, filename = "index.html" }) => {
  return async function index(ctx, next) {
    if (ctx.request.method === "GET" && ctx.url === prefix) {
      ctx.url = path.join(ctx.url, filename);
    }

    await next();
  };
};
