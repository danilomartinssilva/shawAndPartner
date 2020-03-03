const express = require('express');
const cors = require('cors');

class App {
  constructor() {

    this.express = express();
    this.isDev = process.env.NODE_ENV !== 'production';

    this.routes()
  }
  routes() {
    this.express.use(require('./routes'));
  }
}

module.exports = new App().express;
