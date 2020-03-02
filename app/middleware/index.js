"use strict";

const path = require("path");

module.exports = ({ prefix }) => {
  return async function index(ctx, next) {
    if (ctx.request.method === "GET" && ctx.url === prefix) {
      ctx.url = path.join(ctx.url, "index.html");
    }

    await next();
  };
};
