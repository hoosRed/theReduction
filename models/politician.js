var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var schema = new Schema({
  name:   {type:  String, required:  true},
  state:  {type:  String, required:  false},
  party:  {type:  String, required:  false},
  bio:    {type:  String, required:  false},
  prof:   {type:  String, required:  false}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Politician', schema);
