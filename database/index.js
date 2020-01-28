const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoURI = 'mongodb://localhost/rei';

var searchSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  name: { type: String, lowercase: true, trim: true }
});

var db = mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Connected'));

var searchModel = mongoose.model('searchitem', searchSchema);

module.exports = searchModel;