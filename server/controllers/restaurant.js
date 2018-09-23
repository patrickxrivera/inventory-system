const create = (RestaurantModel) => async (req, res) => {
  const { name } = req.body;

  const restaurant = new RestaurantModel({ name });

  const result = await restaurant.save();

  res.send({ success: true });
};

module.exports = {
  create
};
