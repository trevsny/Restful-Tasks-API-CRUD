const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
     title:  { type: String},
     description: { type: String, default: ""},
     completed: { type:String, default: false}
 },{timestamps: true});
 
 
  mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'Giraffe'
    