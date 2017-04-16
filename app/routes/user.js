module.exports = app => {

    const controller = app.controllers.user;

    app.route('/api/user')
        .get(controller.list);

};