const faker = require('faker');

module.exports = (req, res) => {
  const quantity = req.query.quantity;
  const response = [];
  for (let i = 0; i < quantity; i++) response.push(faker.lorem.words(3))
  res.status(200).send(response);
}
