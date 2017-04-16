const logger = require('../services/logger.js');

module.exports = app => {

    let api = {};
    const dao = app.dao.user;

    api.list = (req, res) => {
        dao.list().then(users => {
            res.status(200).json(users);
        }, error => {
            res.sendStatus(500);
        });
    };

    return api;
};