const models = require('./index');

module.exports = {
  getAll: () => {
    return models.find();
  },
  addItems: (items) => {
    return models.create(items);
  }
};