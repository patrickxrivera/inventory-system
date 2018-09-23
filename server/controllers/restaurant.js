const errorHandler = require('../utils/errorHandler');

const create = (RestaurantModel) => async (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    errorHandler(res, 'Restaurant must have a name.');
    return;
  }

  const result = await RestaurantModel.create({ name });

  res.send({ success: true });
};

const get = (RestaurantModel) => async (req, res) => {
  const restaurants = await RestaurantModel.find({});

  res.send({ restaurants });
};

module.exports = {
  create,
  get
};
