const mongoose = require('mongoose');
const models = require('../database/models.js');

describe('insert', () => {
  let connection;
  let db;
  const mongoURI = 'mongodb://localhost/rei';

  // beforeAll(async () => {
  //   connection = await mongoose.connect(mongoURI);
  // });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it ('should get all the items', async () => {
    await models.getAll()
      .then(dbResponse => {
        expect(dbResponse.length).toBe(100);
      })
  });
});