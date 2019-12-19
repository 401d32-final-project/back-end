'use strict';

require ('dotenv').config();
const server = require ('./src/app');
const mongoose = require ('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

server.start(process.env.PORT);