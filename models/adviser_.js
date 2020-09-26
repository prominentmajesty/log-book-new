const mongoose = require('mongoose');

var adviser_Schema = mongoose.Schema({
    email : {
        type : String,
        require : true
    },
    // password will be university id
    password : {
        type : String,
        require : true
    },
     
    name :{
        type : String,
        require : true
    }
});

module.exports = Adviser_db = mongoose.model('Adviser_db', adviser_Schema);