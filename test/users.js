const express = require('../config/express');
const request = require('supertest')(express);

describe('#UserController', () => {

    it('should list users as json', done => {
        request.get('/api/user')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

});