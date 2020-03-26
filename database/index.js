const mongoose = require('mongoose');
const searchSchema = require('./schema.js');
mongoose.Promise = global.Promise;
const mongoURI = 'mongodb://3.101.6.196:27017/rei';

mongoose.set('useCreateIndex', true);

var db = mongoose.connect(mongoURI, {useNewUrlParser: true})
  .then(() => console.log(`\u001b[1;35mMongoDB Connected: ${mongoURI}\u001B[37m`));

var searchModel = mongoose.model('searchitem', searchSchema);

module.exports = searchModel;