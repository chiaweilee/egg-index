'use strict';

module.exports = app => {
  // clone static configuration
  app.config.index = Object.assign(app.config.index || {}, app.config.static || {});

  // put middleware in the first place
  app.config.coreMiddleware.unshift('index');
};
