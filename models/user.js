var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var schema = new Schema({
  email: {type: String, required: false},
  userName: {type: String, required: false},
  password: {type: String, required: false},
  referral: {type: String, required: false},
  favorites:{type: Array, required: false}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);
