module.exports = app => {

    let dao = {};

    dao.list = () => {
        return app.data.winners;
    };

    return dao;
};