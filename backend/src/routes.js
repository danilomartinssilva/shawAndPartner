const express = require('express')
const routes = express.Router();

const ApiController = require('./controllers/ApiController')
routes.get('/api/users', ApiController.listUsers);
routes.get('/api/users/:username', ApiController.detailUser)
routes.get('/api/users/:username/repos', ApiController.listRepositories);

routes.get('/', (req, res) => {
  return res.send('OK').status(200)
})

module.exports = routes