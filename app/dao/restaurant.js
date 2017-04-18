const moment = require('moment');

module.exports = app => {

    let dao = {};
    const dtKey = moment().format('D-W-Y');

    dao.list = (userID) => {
        return new Promise((resolve, reject) => {

            app.data.restaurant.map(restaurant => {
                restaurant.score = app.dao.poll.getScoreByRestaurant(restaurant._id);
                restaurant.winner = app.dao.winners.list().indexOf(restaurant._id) > -1;
                
                let alreadyVoted = false;
                app.data.poll.forEach(vote => {
                    if(vote.user === userID
                        && restaurant._id === vote.restaurant
                        && vote.dtKey === dtKey){
                            alreadyVoted = true;
                    }
                })
                
                restaurant.alreadyVotedByUser = alreadyVoted;
                return restaurant;
            });

            resolve(app.data.restaurant);
        });
    };

    return dao;
};