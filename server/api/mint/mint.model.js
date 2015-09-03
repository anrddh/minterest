'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MintSchema = new Schema({
  name: String,
  url: String,
  user: String
});

module.exports = mongoose.model('Mint', MintSchema);