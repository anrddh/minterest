'use strict';

var Mints = require('../models/mints.js');

function MintHandler () {

	this.getMints = function (req, res) {
		Mints
			.find({}, { '_id': false })
			.exec(function (err, result) {
				if (err) { throw err; }

				if (result) {
					res.json(result);
				} else {
					res.json({message: "No mints!"});
				}
			});
	};

	this.getUserMints = function (req, res) {
		Mints
			.find({user: req.body.username}, { '_id': false })
			.exec(function (err, result) {
				if (err) { throw err; }

				if (result) {
					res.json(result);
				} else {
					res.json({message: "No mints!"});
				}
			});
	};

	this.addMint = function (req, res) {
		var mint  = new Mints();

		mint.name = req.body.name;
		mint.url  = req.body.url;
		mint.user = req.body.username;

		mint.save(function(err){
			if(err) { throw err; }
		});
	};

	this.deleteMint = function (req, res) {
		Mints
			.findOne({name: req.body.name}, function(err, mint) {
				if(err) { throw err; }
				mint.remove();
			});
	};

}

module.exports = MintHandler;
