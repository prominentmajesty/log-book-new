var mongoose = require('mongoose');

var student_Schema = mongoose.Schema({
   
    first_name :{
        type : String,
        required : true
    },

    last_name : {
        type : String,
        required : true
    },

    email : {
        type : String, 
        require : true
    },

    reg_number : {
        type : String,
        require : true
    },

    phone_number : {
        type : String,
        required : true
    },

    college : {
        type : String,
        required : true
    },

    department : {
        type: String,
        required : true
    },

   date_of_siwes : {
        type : String,
        required :true
    },

    approved : {
        type : Boolean,
        default : false
    },

   status : {
       type : String,
       required : true
   }
});

module.exports = Student_db = mongoose.model('Student_db', student_Schema);