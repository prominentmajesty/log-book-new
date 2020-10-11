var express = require('express');
var bodyparser = require('body-parser');
var exphbs = require('express-handlebars');
var connect_flash = require('connect-flash');
var passport = require('passport');
var cookie_session = require('cookie-session');
var mongoose = require('mongoose');
var index = require('./routes/index');
var users = require('./routes/users');
var teacher = require('./routes/teacher');
var admin = require('./routes/admin');
var connector = require('./dataBase/config');

var app = express();
require('./dataBase/passport')(passport);
var port = process.env.PORT || 3000;

mongoose.connect(connector.connector.connector,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify : false,
    useCreateIndex : true
}, () => console.log('Data Base Connected Successfuly')
);
 
app.use(express.static('./public'));
app.engine('.hbs', exphbs({
    extname : '.hbs',
    defaultLayout : 'main',
    partialsDir : 'views/partials',
   /* helpers : {
        base64ArrayBuffer : require('./utils/base64ArrayBuffer'),
    }*/
}));
app.set('view engine', '.hbs');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended :false}));

app.use(cookie_session({
    maxAge : 24 * 60 * 1000,
    keys : [connector.session.cookie_key]
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(connect_flash());
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg');
   // res.locals.error_msg = req.flash('error_msg'); 
   // res.locals.error = req.flash('error'); 
    next();
  }); 

app.use('/', index);
app.use('/users', users);
app.use('/teacher', teacher);
app.use('/admin', admin);

app.listen(port, ()=>{
    console.log(`Cool !! app is Up and running @ port ${port}`);
})