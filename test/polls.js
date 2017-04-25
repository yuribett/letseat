const express = require('../config/express');
const request = require('supertest')(express);

describe('#PollController', () => {

    it('should list polls as json', done => {
        request.get('/api/poll')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should not save a vote with invalid json (user)', done => {
        request.post('/api/poll')
            .send({ userID: 1, restaurant: 1 })
            .expect(400, done);
    });

    it('should not save a vote with invalid json (restaurant)', done => {
        request.post('/api/poll')
            .send({ user: 1, rest: 1 })
            .expect(400, done);
    });

    it('should create a vote with a valid data', done => {
        request.post('/api/poll')
            .send({ user: 5, restaurant: 5 })
            .expect(201, done);
    });

    it('should not save a duplicate vote', done => {
        request.post('/api/poll')
            .send({ user: 5, restaurant: 5 })
            .expect(400, done);
    });

    it('should not save a vote for a winner restaurant', done => {
        request.post('/api/poll')
            .send({ user: 1, restaurant: 2 }) // restaurant 2 is winner according to mocked data
            .expect(400, done);
    });

});