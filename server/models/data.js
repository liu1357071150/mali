var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dataSchema = new Schema({
  "_id" : String,
  "station" : String,
  "valid" : Date,
  "tmpf" : Number,
  "dwpf" : Number,
  "relh" : Number,
  "drct" : String,
  "sknt" : Number,
  "p01i" : Number,
  "alti" : Number,
  "mslp" : String,
  "vsby" : Number,
  "gust" : String,
  "skyc1" : String,
  "skyc2" : String,
  "skyc3" : String,
  "skyc4" : String,
  "skyl1" : String,
  "skyl2" : String,
  "skyl3" : String,
  "skyl4" : String,
  "presentwx" : String,
  "metar" : String
});
module.exports = mongoose.model('informations',dataSchema);
