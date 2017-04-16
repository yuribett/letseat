const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const logger = require('../app/services/logger.js');
const expressValidator = require('express-validator');
const app = express();

app.use(morgan("dev", {
    stream: {
        write: log => {
            logger.debug(`MORGAN: ${log}`);
        }
    }
}));

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type");

    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        next();
    }

});

consign({ cwd: 'app' })
    .include('data')
    .then('dao')
    .then('controllers')
    .then('routes')
    .then('services')
    .into(app);

//client routes
app.all('/*', function(req, res) {
    res.sendFile(path.resolve('public/index.html'));
});

module.exports = app;