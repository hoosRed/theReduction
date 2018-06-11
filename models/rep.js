var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var schema = new Schema({
  id: {type: String, required: true},
  title: {type: String, required: true},
  short_title: {type: String, required: true},
  api_uri: {type: String, required: true},
  first_name: {type: String, required: true},
  middle_name: {type: String, required: true},
  last_name: {type: String, required: true},
  suffix: {type: String, required: true},
  date_of_birth: {type: String, required: true},
  gender: {type: String, required: true},
  party: {type: String, required: true},
  leadership_role: {type: String, required: true},
  twitter_account: {type: String, required: true},
  facebook_account: {type: String, required: true},
  youtube_account: {type: String, required: true},
  govtrack_id: {type: Number, required: true},
  cspan_id: {type: Number, required: true},
  google_entity_id: {type: String, required: true},
  fec_candidate_id: {type: String, required: true},
  url: {type: String, required: true},
  rss_rul: {type: String, required: true},
  contact_form: {type: String, required: true},
  in_office: {type: Boolean, required: true},
  dw_nominate: {type: Number, required: true},
  ideal_point: {type: String, required: true},
  seniority: {type: Number, required: true},
  next_election: {type: Number, required: true},
  total_votes: {type: Number, required: true},
  total_present: {type: Number, required: true},
  ocd_id: {type: String, required: true},
  office: {type: String, required: true},
  phone: {type: String, required: true},
  fax: {type: String, required: true},
  senate_class: {type: Number, required: true},
  state_rank: {type: String, required: true},
  lis_id: {type: Number, required: true},
  missed_votes_pct: {type: Number, required: true},
  votes_with_party_pct: {type: Number, required: true},

});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Rep', schema);
