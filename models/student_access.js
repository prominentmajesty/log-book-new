var mongoose  = require('mongoose');

var student_access_schema = mongoose.Schema({
    email : {
        type : String, 
        require : true
    },

    reg_number : {
        type : String,
        require : true
    },

    mat_number : {
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

    phone_number : {
        type : String,
        required : true
    },

    department : {
        type: String,
        required : true
    },

    date_of_siwes : {
        type : String,
        required : true
    },

    status : {
        type : String,
        required : true
    },

    approved : {
        type : Boolean,
        default : false
    }, 

    imageFile : {
        data : Buffer,
        contentType : String
    },
});
module.exports = Student_Access = mongoose.model('Student_Access', student_access_schema);