var searchModel = require('./index.js');
var sampleSearch = require('../sampledata/data.json');
var mongoose = require('mongoose');
searchModel.create(sampleSearch)
  .then(() => mongoose.connection.close());