const express = require('express');
const Admin_db = require('../models/admin_');
const bcrypt = require('bcrypt');

const router = express.Router();

router.get('/admin_dashboard', (req, res) => {
    res.render('admin_dashboard', {
        title : 'Admin_Dashboard',
        style  : 'admin_dashboard.css',
        script : 'admin_dashboard.js'
    });
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
                    const admin_db = new Admin_db({
                        email : email,
                            password : _hash,
                                name : name
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

module.exports = router;