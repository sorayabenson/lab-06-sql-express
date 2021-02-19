const { app } = require('../app.js');
const { ghosts } =require('../data.js');
const supertest = require('supertest');
const request = supertest(app);

it('should respond with all ghosts', async done => {
    
    const expectation = { results: ghosts };

    const response = await request.get('/ghosts');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectation);
    done();

});

it('should respond with selected ghost', async done => {
    
    const expectation = { 
        results: {
            id: 1,
            name: 'Skater Ghost',
            img: 'https://static1.squarespace.com/static/546be815e4b05d93ff91f0ed/602eefdc0afad00aceb2a0ce/602eeff8513f620bd182f959/1613688877207/skater-ghost.png?format=500',
            description: 'Do you want to go fast? This rad boy can take you for a ride.',
            category: `skill`,
            price: 4,
            priceCurrency: 'skateboard wheels',
        }
     };

    const response = await request.get('/ghosts/1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectation);
    done();

});