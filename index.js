const express = require('express');
const app = express();

const PORT = 3000;

app.listen(PORT);
console.log('listening to port ', PORT);

app.use(express.static('public'));

app.get('/', (res, req, next) => {
    console.log('user is at the main route');
});

app.get('/greet', (req, res, next) => {
    const greetings = ["Hello!", "Hola!", "Salut", "Gday", "Hejsan!"];

    res.send(greetings);
    console.log('greetings send to the /greet route')
});