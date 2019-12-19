'use strict';

const mongoose = require ('mongoose');

const article = mongoose.Schema({
  userId: { type: String, required: true },
  headline: {type: String, required: true},
  description: {type: String, required: true},
  url: { type: String, required: true },
  source: { type: String, required: true },
});

module.exports = mongoose.model('articles', article);
