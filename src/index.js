const express = require('express');
var app = express();

let users = [];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//GET /users
app.get('/users', (req, res) => res.json(users));


//GET /user/:id
app.get('/users/:id', (req, res) => {
    let user = users.find(user => user.id == req.params.id);
    res.json(user);
});

//POST id{0}
app.post('/users', (req, res) => {    
    users.push({ id: 0 });    
    res.json(users);
});

//Port
app.listen(3000, () => {
    console.log('Listen on port 3000');
})