const moment = require('moment');

module.exports = app => {

    let dao = {};
    const dtKey = moment().format('D-W-Y');
    const weekYear = moment().format('W-Y');

    dao.list = () => {
        return app.data.poll;
    };

    dao.getWinner = () => {

    };

    dao.getScoreByRestaurant = (restaurantID) => {
        let score = 0;
        dao.list().forEach(vote => {
            if (vote.restaurant === restaurantID
                && vote.dtKey === dtKey) {
                score++;
            }
        });
        return score;
    };

    dao.vote = (vote) => {
        return new Promise((resolve, reject) => {
            if (isVoteDenied(vote)) {
                reject('Illegal vote');
            } else {
                vote.dtKey = dtKey;
                app.data.poll.push(vote);
                app.dao.restaurant.list(vote.user)
                    .then(restaurants => {
                        resolve(restaurants);
                    })
                    .catch(err => reject(err));
            }

        });
    };

    const isVoteDenied = (newVote) => {
        let denied = false;
        
        app.data.poll.some(votePoll => {
            const pollWeekYear = votePoll.dtKey.substr(votePoll.dtKey.indexOf('-') + 1);

            //user story 1
            if (votePoll.dtKey === dtKey //same day
                && votePoll.restaurant === newVote.restaurant //same restaurant
                && votePoll.user === newVote.user) { //same user
                    denied = true;
                    return;
            }

        });

        //user story 2
        //if(!denied && dao.getWeekWinners.contains(newVote.restaurant)){
        //   denied = true
        //}

        return denied;
    };

    /**
     * TODO
     */
    dao.getWeekWinners = week => {
        let weekWinners = [2,4];
        
        /*
        let arrWeek = [];

        arrWeek = app.data.poll.filter(votePoll => {
            if(weekYear === week){
                return;
            }
        });

        let arrRest = [];

        app.data.restaurant.forEach(restaurant => {
            let score = 0;
            let arrRestWeek = [];
            arrWeek.forEach(vote => {
                if (vote.restaurant === restaurant._id) {
                    
                    vote.dtKey
                    score++;
                }
            });
        });
        */
        
        return weekWinners;
    }

    return dao;
};