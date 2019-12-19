'use strict';

const bcrypt = require ('bcrypt');
const mongoose = require ('mongoose');
const jwt = require ('jsonwebtoken');

const user = mongoose.Schema({
  username: { type: String, required: true, unique: true},
  password: { type: String, required: true},
  email: { type: String, required: true},
  // role: {type: String, default: 'user', enum: ['admin', 'editor', 'user']},
});

// const capabilities = {
//   admin: ['create', 'read', 'update', 'delete'],
//   editor: ['create', 'read'],
//   user: ['read'],
// };

user.pre('save', async function (){
  if (this.isModified('password')){
    this.password = await bcrypt.hash(this.password, 10);
  }
});

user.statics.authenticateToken = function (token){
  console.log('here');
  let parsedToken = jwt.verify(token, process.env.SECRET);
  console.log(parsedToken);
  return this.findOne({ _id:parsedToken.id});
};

user.statics.authenticateBasic = function (auth) {
  let query = {username: auth.username};
  return this.findOne(query)
    .then(user => user && user.comparePassword(auth.password))
    .catch (error => {throw error;});
};

user.methods.comparePassword = function (password){
  return bcrypt.compare(password, this.password)
    .then(valid => valid ? this : null);
};

// user.methods.can = function (capability){
//   return capabilities[this.role].includes(capability);
// };

user.methods.generateToken = function (){
  let tokenData = {
    id: this._id,
    // role: this.role,
  };
  return jwt.sign(tokenData, process.env.SECRET);
};

module.exports = mongoose.model('user', user);
