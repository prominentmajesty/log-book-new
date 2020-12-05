const express = require('express');
const Admin_db = require('../models/admin_');
const Student_db = require('../models/student');
const Student_Access = require('../models/student_access');
const bcrypt = require('bcrypt');
const fs = require('fs');
var path =  require('path');
const passport = require('passport'); 

const router = express.Router();

router.get('/:id/admin_dashboard', (req, res) => {
    console.log(req.user);
    const cast = "admin";
    if(req.user && req.user.status === cast){
        Admin_db.find({_id : req.params.id}).then((admin) =>{
            res.render('admin_dashboard', {
                title : 'Admin_Dashboard',
                style  : 'admin_dashboard.css',
                script : 'admin_dashboard.js',
                admin
            });
        })
        .catch((e) => {
            console.log(e);
            res.status(501).send(e);
        });
    }else{
        res.redirect('/teacher/teacher'); 
    }
});

router.post('/admin_post', function(req, res){ 
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    Admin_db.findOne({email: email}, (err, return_email) =>{
        if(err){
            console.log(err);
        }
        else if(return_email){
            console.log(`Email ${return_email.email} Arealdy exist`);
                res.status(201)
                    .send({msg : `Email ${return_email.email} already exist`});
        }
        else{
            bcrypt.genSalt(10, function(err, salt_){
                if(err){
                    return console.log(err);
                }
                bcrypt.hash(password, salt_, (err, _hash) => {
                    if(err){
                        return console.log(err);
                    }
                    var status_match = 'admin'; 
                    const admin_db = new Admin_db({
                        email : email,
                            password : _hash,
                                name : name,
                                    status : status_match   
                    });
                    admin_db.save().then((_doc) =>{
                        res.status(200).send(`Registration Successful !! Details : ${_doc}`);
                    })
                    .catch((e) => {
                        console.log(e);
                            res.status(400)
                                .send(e);
                    });
                });
            });
        }
    });
});

router.post('/student_credentials', function(req, res){
   
    if(req.user && req.user.status === 'admin'){
        Student_db.findOne({mat_number : req.body.get_value}).then((data) => {
            if(!data){
              return res.status(400).json({msg : ` Request failed! could not find a matched reg Number ${req.body.get_value}`});
            }
            res.status(200).json({data});
        }).catch((err) => {
            console.log(err);
            res.status(500).json({msg : err});
        });
    }else{
        res.status(500).json({msg : 'request failed! only admin can view student details'});
    }
});

router.post('/loginAdmin', (req, res, next) =>{
    passport.authenticate('local', function(err, user, info){
        if(err){
            return next(err);
        }
        if(!user){
            return res.status(404).json({msg : info.message});  
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

router.post('/approved', function(req, res){
    const id_number = req.body.reg_number;
    const email = req.body.email;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const department = req.body.department;
    const collage = req.body.collage;
    const phone_number = req.body.phone_number;
    const date_of_siwes = req.body.date_of_siwes;
    const status = req.body.status;
    const approved = req.body.approved;
    var name = first_name + "" + last_name;
    Student_db.findOneAndUpdate({mat_number : id_number},
        {"$set" : {"approved ": approved}}, {new : true}, (err, doc)=> {
            if(err){
                    console.log(err);
                    return res.status(401).json({err_msg : err})
            }
            bcrypt.genSalt(10, (err, salt) => {
                (err) ? console.log(err)
                : 
                bcrypt.hash(id_number, salt, (err, hash) => {
                    (err) ?  
                        console.log(err) 
                    : 
                        student_access = new Student_Access({
                        email : email,
                        reg_number : hash,
                        mat_number : doc.mat_number,
                        name : name,
                        college : collage,
                        phone_number : phone_number,
                        department : department,
                        date_of_siwes : date_of_siwes,
                        status : status,
                        approved : doc.approved
                    })
                    student_access.imageFile.data = fs.readFileSync(path.join("public/assets/img/profile.jpg"));
                    student_access.save().then((doc) => {
                        res.status(200).json({doc});
                    }, (err) => {
                        console.log(err);
                        res.status(400).json({msg : 'Error when trying to approve student for SIWES'});
                    })                     
                })
            })
        });
}); 

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/techer/teacher');
  });

module.exports = router;