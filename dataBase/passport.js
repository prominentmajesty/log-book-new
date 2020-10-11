const LocalStrategy =  require('passport-local').Strategy;
const Admin_db = require('../models/admin_');
const Adviser_db = require('../models/adviser_');
const Student_Access = require('../models/student_access')
const bcrypt = require('bcrypt');

module.exports = function(passport){
    passport.use('local',new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
    }, function(email, password, done){
        Admin_db.findOne({email : email}, (err, user) =>{
            if(err){
                return done(err);
            } 
            if(!user){ 
                Adviser_db.findOne({email : email}, (err, user)=>{
                    if(err){
                        return done(err);
                    }
                    if(!user){
                        return done(null, false, {message: 'authentication failed !! incorrect username'});
                    }
                    bcrypt.compare(password, user.password, (err, password_matched) =>{
                        if(err) throw err;
                        if(password_matched){
                            return done(null, user);
                        }else{
                            return done(null, false, {message: 'authentication failed !! incorrect password'});
                        }
                    });

                });
            }else{
                bcrypt.compare(password, user.password, (err, password_matched)=>{
                    if(err) throw err;
                    if(password_matched){
                        return done(null,user);
                    }else{
                        return done(null, false, {message : 'authentication failed !! incorrect password'});

                    }
                });
            }
            
        });
    }
    ));

    passport.serializeUser(function(user, done){
        done(null,user.id);
    });
    passport.deserializeUser(function(id,done){
        Admin_db.findById(id, function(err,user){
            if(!user){
                Adviser_db.findById(id, function(err, user){
                    done(err, user);
                });
            }else{
                done(err,user);
            }
        });
    });
}
