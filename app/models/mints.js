'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Mint = new Schema(
	{ name: String },
	{ url: String },
    { user: String }
);

module.exports = mongoose.model('Mint', Mint);
