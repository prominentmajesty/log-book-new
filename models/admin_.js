var mongoose = require('mongoose');
var admin_Schema = mongoose.Schema({
     email : {
         type : String,
         required : true
     },

     password : {
         type : String,
         required : true
     },

     name : {
         type : String,
         required : true
     }
});

module.exports = Admin_db = mongoose.model('Admin_db', admin_Schema);