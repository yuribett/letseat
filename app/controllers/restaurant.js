const logger = require('../services/logger.js');

module.exports = app => {

    let api = {};
    const dao = app.dao.restaurant;

    api.list = (req, res) => {
        const userID = parseInt(req.params.user);
        dao.list(userID).then(restaurants => {
            res.status(200).json(restaurants);
        }, error => {
            res.sendStatus(500);
        });
    };

    return api;
};