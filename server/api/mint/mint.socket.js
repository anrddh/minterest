/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Mint = require('./mint.model');

exports.register = function(socket) {
  Mint.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Mint.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('mint:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('mint:remove', doc);
}