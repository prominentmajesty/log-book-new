const mongoose = require('mongoose');

var adviser_Schema = mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    // password will be university id
    password : {
        type : String,
        required : true
    },
     
    name :{
        type : String,
        required : true
    },

    status : {
        type : String,
        required : true
    }
});

module.exports = Adviser_db = mongoose.model('Adviser_db', adviser_Schema);