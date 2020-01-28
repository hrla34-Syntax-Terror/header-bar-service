const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const models = require('../database/models.js');

describe('database', () => {
  var db;
  
  beforeAll(async () => {
    const mongoURI = 'mongodb://localhost/rei-test';
    db = await mongoose.connect(mongoURI, { useNewUrlParser: true });
  });

  afterEach(async () => {
    await mongoose.connection.collections['searchitems'].deleteMany();
  });

  afterAll(async () => {
    await mongoose.connection.close(true)
      .then(() => console.log('closed'))
      .catch(err => console.error(err));
  });

  test ('should get all the items', () => {
    var sampleSearches = [{ id: 1, name: "testItem1" }, { id: 2, name: "testItem2" }, { id: 3, name: "testItem3" }];

    return models.addItems(sampleSearches)
      .then(() => {
        return models.getAll();
      })
      .then(dbResponse => {
        expect(dbResponse.length).toBe(3);
      });
  });
  
  test ('adds a search entry', () => {
    return models.addItems({id: 1000, name: "test_item"})
    .then(() => {
      return models.getAll();
    })
    .then(dbResponse => {
      expect(dbResponse[0]).toEqual(expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String)
      }));
    });
  });
});

