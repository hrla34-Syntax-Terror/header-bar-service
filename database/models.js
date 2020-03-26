const models = require('./index');

module.exports = {
  getAll: () => {
    return models.find().sort({id: 1});
  },
  addItems: (items) => {
    return models.create(items);
  },
  deleteAll: () => {
    return models.deleteMany();
  }
};