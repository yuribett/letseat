const logger = require('../services/logger.js');

module.exports = app => {

    let api = {};
    const dao = app.dao.poll;

    api.list = (req, res) => {
        dao.list().then(polls => {
            res.status(200).json(polls);
        }, error => {
            res.sendStatus(500);
        });
    };

    api.vote = (req, res) => {
        const errors = isVoteValid(req);
        if (errors) {
            res.status(400).send(errors);
            return;
        }

        const vote = req.body;
        dao.vote(vote).then(polls => {
            res.status(200).json(polls);
        }, error => {
            logger.error(error);
            res.sendStatus(400);
        });
    };

    const isVoteValid = (req) => {
        req.assert("user", "user is required and must be numeric").notEmpty().isNumeric();
        req.assert("restaurant", "restaurant is required and must be numeric").notEmpty().isNumeric();
        return req.validationErrors();
    }

    return api;
};