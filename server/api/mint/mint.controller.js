'use strict';

var _ = require('lodash');
var Mint = require('./mint.model');

// Get list of mints
exports.index = function(req, res) {
  Mint.find(function (err, mints) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(mints);
  });
};

// Get a single mint
exports.show = function(req, res) {
  Mint.find({user: req.params.username}, function (err, mint) {
    if(err) { return handleError(res, err); }
    if(!mint) { return res.status(404).send('Not Found'); }
    return res.json(mint);
  });
};

// Creates a new mint in the DB.
exports.create = function(req, res) {
  Mint.create(req.body, function(err, mint) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(mint);
  });
};

// Updates an existing mint in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Mint.findById(req.params.id, function (err, mint) {
    if (err) { return handleError(res, err); }
    if(!mint) { return res.status(404).send('Not Found'); }
    var updated = _.extend(mint, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(mint);
    });
  });
};

// Deletes a mint from the DB.
exports.destroy = function(req, res) {
  Mint.findById(req.params.id, function (err, mint) {
    if(err) { return handleError(res, err); }
    if(!mint) { return res.status(404).send('Not Found'); }
    mint.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}