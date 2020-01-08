const express = require('express');
const _ = require('underscore');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Listen on port 3000');
})