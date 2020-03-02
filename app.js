'use strict';

module.exports = class {
  constructor(app) {
    this.app = app;
  }

  async configDidLoad() {
    this.app.config.coreMiddleware.splice(
        this.app.config.coreMiddleware.indexOf('static'),
        0,
        'compress'
    );
  }
};
