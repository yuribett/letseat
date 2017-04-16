module.exports = app => {

    const controller = app.controllers.restaurant;

    app.route('/api/restaurant/:user')
        .get(controller.list);

};