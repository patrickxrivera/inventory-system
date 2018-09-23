const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const initTestSetup = require('../testSetup');

const app = require('../../app');
const code = require('../../utils/statusCodes');
const keys = require('../../config/keys');
const { postReq } = require('./../testHelpers');

initTestSetup();

chai.use(chaiHttp);

const expect = chai.expect;

describe('POST /api/restaurant', () => {
  const route = '/api/restaurant';

  it('should create a new restaurant', async () => {
    const data = {
      name: 'Boca Di Pepo'
    };

    const res = await postReq(route, data);

    expect(res).to.have.status(code.OK);
    expect(res.body.success).to.be.true;
  });

  it('should return an error message when no name is received', async () => {
    const res = await postReq(route);

    expect(res).to.have.status(code.USER_ERROR);
    expect(res.body.error.message).to.equal('Restaurant must have a name.');
  });
});
