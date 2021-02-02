var express = require('express');
var passport = require('passport');
var Log_Book = require('../models/log_book');

var router = express.Router();

router.get('/user_login', function(req, res){
    res.render('login', {
        title : 'Login',
        style : 'user_login.css',
        script : 'user_login.js'
    });
});

router.get('/users', (req, res) => {
    const user = req.user
    console.log(user)
    res.render('users', {
        title : 'Dashboard',
        style : 'users.css',
        script : 'users.js',
        user
    });
}); 

router.post('/log_book_arrays', (req, res)=> {
    const week_1_String = 'WEEK 1';
    const week_2_String = 'WEEK 2';
    const week_3_String = 'WEEK 3';
    const week_4_String = 'WEEK 4';
    const week_5_String = 'WEEK 5';

    if(req.user ) {

        const log_book = new Log_Book({

            data_idd : req.body.data_idd,

            week_1_heading : week_1_String,
            week_1_input_reg_number : req.body.week_1_input_reg_number,
            week_1_input_Date : req.body.week_1_input_Date,
            week_1_input_day : req.body.week_1_input_day,
            week_1_input_topic_heading : req.body.week_1_input_topic_heading,
            week_1_department : req.body.week_1_department,
            week_1_input_description : req.body.week_1_input_description,
            week_1_summary_study : req.body.week_1_summary_study,

            week_2_heading : week_2_String, 
            week_2_input_reg_number : req.body.week_2_input_reg_number,
            week_2_input_Date : req.body.week_2_input_Date,
            week_2_input_day : req.body.week_2_input_day,
            week_2_input_topic_heading : req.body.week_2_input_topic_heading,
            week_2_department : req.body.week_2_department,
            week_2_input_description : req.body. week_2_input_description,
            week_2_summary_study : req.body.week_2_summary_study,

            week_3_heading : week_3_String,
            week_3_input_reg_number : req.body.week_3_input_reg_number,
            week_3_input_Date : req.body.week_3_input_Date,
            week_3_input_day : req.body.week_3_input_day,
            week_3_input_topic_heading : req.body.week_3_input_topic_heading,
            week_3_department : req.body.week_3_department, 
            week_3_input_description : req.body.week_3_input_description,
            week_3_summary_study : req.body.week_3_summary_study,

            week_4_heading  : week_4_String,
            week_4_input_reg_number : req.body.week_4_input_reg_number,
            week_4_input_Date : req.body.week_4_input_Date,
            week_4_input_day : req.body.week_4_input_day,
            week_4_input_topic_heading : req.body.week_4_input_topic_heading,
            week_4_department : req.body.week_4_department,
            week_4_input_description : req.body.week_4_input_description,
            week_4_summary_study : req.body.week_4_summary_study,
            
            week_5_heading : week_5_String,
            week_5_input_reg_number : req.body.week_5_input_reg_number,
            week_5_input_Date : req.body.week_5_input_Date,
            week_5_input_day : req.body.week_5_input_day,
            week_5_input_topic_heading : req.body.week_5_input_topic_heading,
            week_5_department : req.body.week_5_department,
            week_5_input_description : req.body.week_5_input_description,
            week_5_summary_study : req.body.week_5_summary_study
        })

        log_book.save().then((doc) => {
            res.status(200).json({doc, msg : 'Submission successful'});
        }).catch((err) => {
            console.log(err);
            res.status(400).json({err_msg : 'Submtion failed Due to Undisclosed Issues'})
        });
    }else{
        console.log('user not logged in');
        res.status(400).json({err_msg : 'Failed to submit Log Book!! Reason: User not logged in'});
    }
}); 

router.post('/user_login', (req, res, next) => {
    console.log(req.body.email);
    console.log(req.body.password);
    passport.authenticate('local', function(err, user, info){
        if(err){ 
            console.log(err);
            return next(err);  
        }
        if(!user){
            console.log('No user found');
            return res.status(404).json({msg : info.message});
        }
        req.logIn(user, (err) => {
            if(err){  
                return console.log(err);
            }
            console.log(user);       
           return res.status(200).json({msg : 'User successfuly logged in', user});
        })
    })(req, res, next);
})

router.get('/logout', (req, res) => {
    req.logOut();
    res.status(200).json({msg : 'You are logged out now'});
});
module.exports = router;