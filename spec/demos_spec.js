let supertest = require('supertest');
let app = require('../src/demos')
let request = supertest(app);
describe('Get /query', function () {
    it('should get a parameter from query', function (done) {
        request
            .get('/query?q=ym')
            .expect('ym')
            .end(function (err, res) {
                if (err) {
                    done.fail(err);
                }
                else {
                    done();
                }
            })

    })
})

describe('Post /body', function () {
    it('should get a parameter from body', function (done) {
        request
            .post('/body')
            .send({name: 'wyx'})
            .expect('wyx')
            .end(function (err, res) {
                if (err) {
                    done.fail(err);
                }
                else {
                    done();
                }
            })
    })
})


describe('Get /params', function () {
    it('should get a parameter from params', function (done) {
        request
            .get('/params/wyx')
            .expect('wyx')
            .end(function (err, res) {
                if (err) {
                    done.fail(err);
                }
                else {
                    done();
                }
            })
    })
})

