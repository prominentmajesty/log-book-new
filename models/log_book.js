var mongoose = require('mongoose');

var log_book_schema = mongoose.Schema({
    data_idd : {
        type : String,
        required : true
    },

    week_1_heading : {
        type : String,
        required : true
    },
    week_1_input_reg_number :{
        type: String,
        required :true
    },
    week_1_input_Date : {
        type : String,
        required : true
    },
    week_1_input_day : {
        type :String,
        required : true
    },
    week_1_input_topic_heading : {
        type :String,
        required :true
    },
    week_1_department : {
        type :String,
        required :true,
    },
    week_1_input_description : {
        type :String,
        required : true
    },
    week_1_summary_study : {
        type : String,
        required :true
    },

    week_2_heading : {
        type : String,
        required : true
    },
    week_2_input_reg_number :{
        type: String,
        required :true
    },
    week_2_input_Date : {
        type : String,
        required : true
    },
    week_2_input_day : {
        type :String,
        required : true
    },
    week_2_input_topic_heading : {
        type :String,
        required :true
    },
    week_2_department : {
        type :String,
        required :true,
    },
    week_2_input_description : {
        type :String,
        required : true
    },
    week_2_summary_study : {
        type : String,
        required :true
    },

    week_3_heading : {
        type : String,
        required : true
    },
    week_3_input_reg_number :{
        type: String,
        required :true
    },
    week_3_input_Date : {
        type : String,
        required : true
    },
    week_3_input_day : {
        type :String,
        required : true
    },
    week_3_input_topic_heading : {
        type :String,
        required :true
    },
    week_3_department : {
        type :String,
        required :true,
    },
    week_3_input_description : {
        type :String,
        required : true
    },
    week_3_summary_study : {
        type : String,
        required :true
    },

    week_4_heading : {
        type : String,
        required : true
    },
    week_4_input_reg_number :{
        type: String,
        required :true
    },
    week_4_input_Date : {
        type : String,
        required : true
    },
    week_4_input_day : {
        type :String,
        required : true
    },
    week_4_input_topic_heading : {
        type :String,
        required :true
    },
    week_4_department : {
        type :String,
        required :true,
    },
    week_4_input_description : {
        type :String,
        required : true
    },
    week_4_summary_study : {
        type : String,
        required :true
    },

    week_5_heading : {
        type : String,
        required : true
    },
    week_5_input_reg_number :{
        type: String,
        required :true
    },
    week_5_input_Date : {
        type : String,
        required : true
    },
    week_5_input_day : {
        type :String,
        required : true
    },
    week_5_input_topic_heading : {
        type :String,
        required :true
    },
    week_5_department : {
        type :String,
        required :true,
    },
    week_5_input_description : {
        type :String,
        required : true
    },
    week_5_summary_study : {
        type : String,
        required :true
    },
}) 
module.exports = Log_Book = mongoose.model('Log_Book', log_book_schema);