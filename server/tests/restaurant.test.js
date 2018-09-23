const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const initTestSetup = require('./testSetup');

const app = require('../app');
const code = require('../utils/statusCodes');
const keys = require('../config/keys');
const { postReq } = require('./testHelpers');

initTestSetup();

chai.use(chaiHttp);

const expect = chai.expect;

describe('POST /api/restaurant', function() {
  it('should create a new restaurant', async function() {
    const data = {
      name: 'Boca Di Pepo'
    };
    const route = '/api/restaurant';

    const res = await postReq(route, data);

    expect(res).to.have.status(code.OK);
    expect(res.body.success).to.be.true;
  });
});
