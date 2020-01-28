const model = require('../database/models.js');

module.exports = {
  getAll: (req, res) => {
    model.getAll()
      .then(allItems => {
        res.status(200).send(allItems);
      })
      .catch(err => res.status(200).send(err));
  }
};