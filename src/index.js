const express = require('express');
var app = express();

let users = [];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//GET /users
app.get('/users', (req, res) => res.json(users));


//Port
app.listen(3000, () => {
    console.log('Listen on port 3000');
})