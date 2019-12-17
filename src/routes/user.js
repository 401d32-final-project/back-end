'use strict';

require('dotenv').config();
const express = require ('express');
const mongoose = require('mongoose');

const router = express.Router();
// router.use(express.json());

const auth = require ('../middleware/auth.js');
const User = require ('../user/user-model.js');


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

router.post('/signup', (req,res,next) => {
  let user = new User (req.body);
  user.save()
    .then((user) => {
      req.token = user.generateToken();
      req.user = user;
      res.set('token', req.token);
      res.cookie('auth', req.token);
      res.send(req.token);
    })
    .catch(next);
});

router.post('/signin', auth(), (req, res, next) => {
  res.cookie ('auth', req.token);
  res.send(req.token);
});

router.get('/admins', auth('delete'), (req, res, next) => {
  res.send('Admin')
});

router.get('/users', auth('delete'), (req, res, next) => {
  res.send('User')
});


module.exports = router;


