const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoURI = 'mongodb://localhost/rei';

mongoose.set('useCreateIndex', true);

var searchSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  name: { type: String, lowercase: true, trim: true }
});

var db = mongoose.connect(mongoURI, {useNewUrlParser: true})
  .then(() => console.log('\u001b[1;35m MongoDB Connected'));

var searchModel = mongoose.model('searchitem', searchSchema);

module.exports = searchModel;