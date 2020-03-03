/* const request = require('supertest');

const app = require('../backend/src/index')

 */

const app = require('../src/server')
const request = require('supertest')
describe('', () => {


  it('should return users ', async () => {
    const response = await request(app).get('/api/users/?since=35');
    expect(response.status).toBe(200)
  })
  it('should return detail user specifyed ', async () => {
    const response = await request(app).get('/api/users/danilomartinssilva');

    expect(response.status).toBe(200)
  })
  it('should return non-existent user ', async () => {
    const response = await request(app).get('/api/users/danilomartinssilvassss');
    expect(response.body.status).toBe(false)
  })
  it('should return repostory of user ', async () => {
    const response = await request(app).get('/api/users/danilomartinssilva/repos');

    expect(response.status).toBe(200)
  })
  it('should return that the user does not have a repository ', async () => {
    const response = await request(app).get('/api/users/danilomartinssilvadsfdsfdsa/repos');
    console.log(response.body)

    expect(response.body.status).toBe(false)
  })




})
