var mongoose = require('mongoose');
var bcrypt=require('bcrypt')
var numSaltRounds = 10;
//VALIDATION

var volunteerSchema = new mongoose.Schema({
   firstname: '',
   lastname: '',
   email: '',
   password: '',
   occupation:'',
   mobile:Number,
   age:Number

})

volunteerSchema.pre('save', function(next){
    var volunteer = this
 
    if (!volunteer.isModified('password'))
       return next()
 
    bcrypt.hash(volunteer.password, numSaltRounds, (err, hash) => {
       if(err) return next(err)
       volunteer.password=hash
       next()
    })
 
 })

 
 
 module.exports = mongoose.model('Volunteer', volunteerSchema)   