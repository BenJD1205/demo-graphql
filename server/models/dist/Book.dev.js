"use strict";

var mongoose = require('mongoose');

var BookSchema = mongoose.Schema({
  name: {
    type: String
  },
  genre: {
    type: String
  },
  authorId: {
    type: String
  }
});
module.exports = mongoose.model('books', BookSchema);