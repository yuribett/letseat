module.exports = app => {

    let dao = {};

    dao.list = () => {
        return new Promise((resolve, reject) => {
            resolve(app.data.user);
        });
    };

    return dao;
};