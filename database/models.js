const models = require('./index');

module.exports = {
  getAll: () => {
    return models.find();
  }
};