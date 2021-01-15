// requiring express in app.js file
const express = require('express');
// creating a server
const app = express();
// setting my templating language
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/hello', (req, res) => {
    res.send('Jambo Kenya!');
});

app.listen(3000, () => {
    console.log('John here!')
});
