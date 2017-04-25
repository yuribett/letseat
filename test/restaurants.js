const express = require('../config/express');
const request = require('supertest')(express);

describe('#RestaurantController', () => {

    it('should list restaurants as json', done => {
        request.get('/api/restaurant/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

});