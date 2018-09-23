const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');

const app = require('../../app');
const code = require('../../utils/statusCodes');
const keys = require('../../config/keys');
const { getReq, postReq } = require('./../testHelpers');

chai.use(chaiHttp);

const expect = chai.expect;

describe('GET /api/restaurant', () => {
  const route = '/api/restaurant';

  before(async () => {
    await mongoose.connect(
      'mongodb://localhost/inventory-system-test',
      { useNewUrlParser: true },
      () => {
        mongoose.connection.db.dropDatabase();
      }
    );

    mongoose.connection.once('open', () => {}).on('error', (error) => {
      console.warn('Warning', error);
    });

    const restaurantOne = {
      name: 'La Taqueria'
    };
    const restaurantTwo = {
      name: 'Olive Garden'
    };

    await Promise.all([postReq(route, restaurantOne), postReq(route, restaurantTwo)]);
  });

  it('should get all restaurants', async () => {
    const res = await getReq(route);

    expect(res).to.have.status(code.OK);
    expect(res.body.restaurants).to.have.length(2);
  });
});
