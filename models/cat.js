var mongoose = require('mongoose');


// example schema 
var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  cuteness: Number
})

var Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
