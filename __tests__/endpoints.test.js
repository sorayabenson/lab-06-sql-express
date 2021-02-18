const { app } = require('../app.js')
const supertest = require('supertest')
const request = supertest(app);

it('gets the test endpoint', async done => {
    const ghosts = [
        {
            id: 1,
            name: 'human ghost'
        },
        {
            id: 2,
            name: 'skater ghost'
        },
        {
            id: 3,
            name: 'fruit ghost'
        },
    ]
    const response = await request.get('/test')

    expect(response.status).toBe(200)
    expect(response.body.message).toEqual(ghosts)
    done()

})