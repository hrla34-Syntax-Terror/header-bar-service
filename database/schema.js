const mongoose = require('mongoose');

var searchSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  name: { type: String, lowercase: true, trim: true }
});

module.exports = searchSchema;