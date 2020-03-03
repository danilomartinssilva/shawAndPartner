
const url = 'https://api.github.com/';
const axios = require('axios');
class ApiController {


  async listUsers(req, res) {

    try {
      const { since } = req.query

      const fetch = await axios.default.get(`${url}users?since=${since}`);

      return res.json({
        status: true, message: "Ok",
        last: '/api/users?' + 'since',
        next: '/api/users?' + fetch.headers.link.split(',')[0].split(';')[0].split('<')[1].split('>')[0].split('?')[1],
        result: fetch.data,
      }).status(200)
    }
    catch (err) {
      return res.json({
        status: false
      }).status(400)
    }

  }
  async detailUser(req, res) {
    try {
      const { username } = req.params;
      const fetch = await axios.default.get(`${url}users/${username}`);
      return res.json({ status: true, message: 'OK', result: fetch.data }).status(200)

    }
    catch (err) {
      return res.json({ status: false }).status(400)
    }

  }
  async listRepositories(req, res) {

    try {
      const { username } = req.params;
      const fetch = await axios.default.get(`${url}users/${username}/repos`);
      return res.json({
        status: true, result: fetch.data, message: 'OK'
      }).status(200)

    }
    catch (err) {
      return res.json({ status: false }).status(400)
    }

  }

}

module.exports = new ApiController()