var express = require('express');
const bcrypt = require('bcrypt');
const Adviser_db = require('../models/adviser_');

var router = express.Router();

router.get('/teacher', function(req, res){
    res.render('teacher', {
        title : 'Adviser Page',
        style : 'teacher.css',
        script : 'teacher.js'
    }); 
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
                    
                    const adviser_db = new Adviser_db({
                        email : email,
                        password : hash,
                        name : name
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

module.exports = router;