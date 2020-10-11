var mongoose = require('mongoose');

var student_Schema = mongoose.Schema({

    email : {
        type : String, 
        require : true
    },

    reg_number : {
        type : String,
        require : true
    },

    name :{
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

    year_of_admission : {
        type : String,
        required : true
    },

    year_of_graduation : {
        type : String,
        required : true
    },

    date_of_submission : {
        type : String, 
        required : true
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