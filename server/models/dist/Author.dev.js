"use strict";

var mongoose = require('mongoose');

var AuthorSchema = mongoose.Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  }
});
module.exports = mongoose.model('authors', AuthorSchema);