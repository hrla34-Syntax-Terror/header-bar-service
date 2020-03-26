const mongoose = require('mongoose');
const models = require('../database/models.js');
mongoose.Promise = global.Promise;

var sampleSearches = [{ id: 1, name: "testItem1" }, { id: 2, name: "testItem2" }, { id: 3, name: "testItem3" }];

describe('database', () => {

  beforeEach(async () => {
    await models.deleteAll();
    await models.addItems(sampleSearches);
  });

  afterAll(async () => {
    await mongoose.connection.close(true)
  });

  it(`Gets everything from the database`, () => {
    return models.getAll()
      .then((allItems) => {
        expect(allItems.length).toBe(3);
      })
  })

  it(`Adds items to the database`, () => {
    let oneItem = [{id: 4, name: "AddedItem"}];

    return models.addItems(oneItem)
      .then(() => {
        return models.getAll()
      })
      .then((allItems) => {
        expect(allItems.length).toBe(4);
      });
  })
});

