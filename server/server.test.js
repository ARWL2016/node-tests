const request = require('supertest');
const expect = require('expect');

var app = require('./server').app; 

describe('Server tests', () => {

    describe('Root GET request', () => {
        it('should return hello world response', (done) => {
            request(app)
            .get('/')
            .expect(404)
            .expect((res) => {
                expect(res.body).toInclude({
                    error: 'Page not found'
                })
            })
            .end(done);
        });
    });

    describe('/users GET request', () => {
        it('should return status 200 and myself', (done) => {
            request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    name: "Al", 
                    age: 10
                })
            })
            .end(done);
        });
    });

});