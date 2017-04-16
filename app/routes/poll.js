module.exports = app => {

    const controller = app.controllers.poll;

    app.route('/api/poll')
        .get(controller.list);

    app.route('/api/poll/')
        .put(controller.vote);

};