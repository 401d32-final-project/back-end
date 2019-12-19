'use strict';

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(morgan('dev'));

const http = require('http').createServer(app);
const io = require('socket.io')(http);

const Message = require('../user/message-model');

io.on('connect', socket => {
  console.log(`Message socket connect :: ${socket.id}`);

  socket.on('POST_MESSAGE', (payload) => {
    const newMessage = new Message({ text: payload, createdAt: new Date()});
    newMessage.save()
      .then(message => {
        io.emit('MESSAGE', message)
      });
  });
});

app.get('/messages', (req, res, next) => {
  Message.find({})
    .then(data => res.send(data))
    .catch(next);
})

http.listen(PORT, () => {
  console.log(`Message server running on port::: ${PORT}`);
})