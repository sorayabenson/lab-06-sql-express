const express = require('express');
const cors = require('cors');
const app = express();
const { ghosts } = require('./data.js');

app.use(cors());

app.get('/ghosts', (req, res) => {

    console.log('ghosts', ghosts)
    res.json({ results: ghosts });
});

app.get('/ghosts/:id', (req, res) => {
    
    const id = Number(req.params.id);
    const selectedGhost = ghosts.find((ghost) => ghost.id === id);
    
    res.json({ results: selectedGhost });
});

module.exports = { app };