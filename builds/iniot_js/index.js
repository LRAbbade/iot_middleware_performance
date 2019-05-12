const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var mongojs = require('mongojs')

const PORT = 8070;

var db = mongojs('iot', ['devices'])


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

const log = message => console.log(`[${(new Date()).toLocaleString()}] ${message}`);

app.get('/', (req, res) => {
    db.devices.find({}, (err, result) => {
        if (err) {
            res.send(`error while counting: ${err}`);
        } else {
            res.json({result});
        }
    });
});

app.post('/api/v1/message', (req, res) => {
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

    // // For Debugging:
    // log(`Request payload: ${JSON.stringify(payload)}`);
    // log(`Request headers: ${JSON.stringify(headers)}`);
    // log(`JWT token: ${JSON.stringify(decodedToken)}`);
    // log(`User: ${user}`);
    // log(`Application: ${application}`);
    // log(`Message:\n${JSON.stringify(message)}`);
    //
    // res.send();

    // inserir message no mongo
    db.devices.save(message, (err, result) => {
        if (err) {
            const err_message = `Error inserting message: ${err}`;
            log(err_message);
            res.send(err_message);
        } else {
            res.send();
        }
    });
});

app.listen(PORT, function () {
    log(`Listening on port ${PORT}...`);
});
