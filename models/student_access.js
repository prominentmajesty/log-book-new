var mongoose  = require('mongoose');

var student_access_schema = mongoose.Schema({

    access_code : {
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

    imageFile : {
        data : Buffer,
        contentType : String
    },

    approved : {
        type : Boolean,
        default : false
    }
});

module.exports = Student_Access = mongoose.model('Student_Access', student_access_schema);