const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/parking', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
  console.log('____________________________')
});

db.once('open', function () {
  console.log('mongoose connected successfully');
  console.log('____________________________')
});


let userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  balance:String,
  password:String
});


let parkSchema = new mongoose.Schema({
  numpark: String,
  status: Boolean,
});




let userdata = mongoose.model('userdata', userSchema);
let parkdata = mongoose.model('parkdata', parkSchema);







module.exports = {

userdata,
parkdata

}