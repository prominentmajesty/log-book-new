var express = require('express');
const bcrypt = require('bcrypt');
const Adviser_db = require('../models/adviser_');
const Student_db = require('../models/student');
const passport = require('passport');

var router = express.Router();

router.get('/teacher', function(req, res){
    console.log(req.user);
    res.render('teacher', {
        title : 'Adviser Page',
        style : 'teacher.css',
        script : 'teacher.js'
    }); 
});
router.get('/refresh_page', (req, res) => {
    if(req.user && req.user.status === 'adviser'){
        res.status(200).json({msg : 'adviser'});
    }else{
        res.status(400).json({msg : 'Not adviser'});
    }
});

router.post('/teacher_post', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    Adviser_db.findOne({email : email}, (err, return_email) => {
        if(err){
           console.log(err);
        }  
        else if(return_email){
            console.log(`Email ${return_email.email} already exist`);
                res.status(201)
                    .send(`${return_email.email} already exist`);
        }
        else
        {
            bcrypt.genSalt(10, (err, salt_round) => {
                if(err){ 
                    return console.log(err);
                }

                bcrypt.hash(password, salt_round, (err, hash) => {
                    if (err){
                        return console.log(err);
                    }
                    
                    var status_match = 'adviser'
                    const adviser_db = new Adviser_db({
                        email : email,
                        password : hash,
                        name : name,
                        status : status_match
                    });
                     
                    adviser_db.save().then((doc_) => {
                        console.log(`Adviser's Document Saved Successfuly !! Details : ${doc_}`);
                            res.status(200)
                                .send(`Registring ${doc_} Successfuly`);
                    },(e) => {
                        console.log(e);
                            res.status(401)
                                .send(e);
                    });

                });

            });

        }

    });
});

router.post('/post_qualified_students', function(req, res){
    if(req.user && req.user.status === 'adviser'){
        const first_name = req.body.first_name;
        const last_name = req.body.last_name;
        const email = req.body.email;
        const reg_number = req.body.reg_number;
        const mat_number = req.body.reg_number;
        const phone_number = req.body.phone_number;
        const college = req.body.college;
        const department = req.body.department;
        const date_of_siwes = req.body.date_of_siwes;

        Student_db.findOne({email : email}, (er, result) => {
            if(er){
                return console.log(er);
            }
            else if(result){
                return res.status(400).json({msg : 'Failed to register! student with this email alredy exist'});
            }
            bcrypt.genSalt(10, (err, salt_round) => {
                if(err){
                    return console.log(err);
                }
                bcrypt.hash(reg_number, salt_round, function(err, hashed){
                    if(err){
                        return console.log(err);
                    }
                    const status = 'student';
                    const student_db = new Student_db({
                        first_name : first_name,
                        last_name : last_name,
                        email : email,
                        reg_number : hashed,
                        mat_number : reg_number,
                        phone_number : phone_number,
                        college : college,
                        department : department,
                        date_of_siwes : date_of_siwes,
                        status : status
                    });
                    student_db.save().then((data)=>{
                        res.status(200).json({msg : `${data.email} with ${data._id} has successfuly been registerd`});
                    }).catch((err) => {
                        console.log(err);
                    });
                });
            });
        });    
    }else{
      return  res.status(401).json({msg : 'failed requet! Only course Advisers can register students'});
    }
});

router.post('/loginTeacher', (req, res, next) =>{
    console.log(req.body.email);
    passport.authenticate('local', function(err, user, info){
        if(err){
            return next(err);
        } 
        if(!user){
            return res.status(404).json({msg :info.message}); 
        }
        req.logIn(user, (err) => {
            if(err){
                return console.log(err);
            }
            res.status(200).json({
                msg : 'User Logged In',
                user 
            })
        });
    })(req, res, next); 
});

router.get('/logout', (req, res) => {
    req.logOut();
    res.status(200).json({msg : 'You are logged out now'});
});

module.exports = router;