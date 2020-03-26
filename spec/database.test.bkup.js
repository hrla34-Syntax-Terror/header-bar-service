const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const models = require('../database/models.js');

describe('database', () => {

  // importing models will actually create the connection for us!
  // just make sure we dump everything before we start!
  beforeAll(async (done) => {
    await mongoose.connection.collections['searchitems'].deleteMany();
    done();
  });

  afterAll(async (done) => {
    await mongoose.connection.close(true)
    done();
  });

  test ('should get all the items', (done) => {
    var sampleSearches = [{ id: 1, name: "testItem1" }, { id: 2, name: "testItem2" }, { id: 3, name: "testItem3" }];
    return models.addItems(sampleSearches)
      .then(() => {
        return models.getAll();
      })
      .then(dbResponse => {
        expect(dbResponse.length).toBe(3);
        done();
      });
  });
  
  test ('adds a search entry', (done) => {
    return models.addItems({id: 1000, name: "test_item"})
    .then(() => {
      return models.getAll();
    })
    .then(dbResponse => {
      expect(dbResponse[0]).toEqual(expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String)
      }));
      done();
    });
  });
});

