const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

const PORT = 10666;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

const log = message => console.log(`[${(new Date()).toLocaleString()}] ${message}`);

app.get('/', (req, res) => {
    res.send('Welcome to InIot.js');
});

app.post('/device-api/api/v1/message', (req, res) => {
    const payload = req.body;
    const headers = req.headers;

    const decodedToken = jwt.decode(headers.authorization);
    const user = decodedToken.sub;
    const application = decodedToken.iss;

    const message = {
        timestamp: new Date(),
        user,
        object: payload
    }

    // inserir message no mongo

    // // For Debugging:
    // log(`Request payload: ${JSON.stringify(payload)}`);
    // log(`Request headers: ${JSON.stringify(headers)}`);
    // log(`JWT token: ${JSON.stringify(decodedToken)}`);
    // log(`User: ${user}`);
    // log(`Application: ${application}`);
    // log(`Message:\n${JSON.stringify(message)}`);

    res.send();
});

app.listen(PORT, function () {
    log(`\nListening on port ${PORT}...`);
});
