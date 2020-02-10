var searchModel = require('./index.js');
var sampleSearch = require('../sampledata/data.json');
var mongoose = require('mongoose');

searchModel.remove({}, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('\u001b[1;35mCollection items removed\u001B[37m');
  }
})
.then(val => {
  searchModel.create(sampleSearch)
    .then(() => {
      console.log("\u001b[1;35mDB Seeded\u001B[37m");
      mongoose.connection.close();
    });
})
