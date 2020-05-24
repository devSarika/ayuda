var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var familySchema = new Schema({
  firstname : {type:String},
  lastname : {type:String},
  aadhar : {type:Number},
  income : {type:Number},
  adults : {type:Number},
  children : {type:Number},
  situation : {type:String},
  location : {type:String},
  occupation : {type:String},
  phoneno : {type:Number}


});

var family = mongoose.model('family', familySchema,'familyregistration');

module.exports = family;