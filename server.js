var express = require('express');
var bodyparser = require('body-parser');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var index = require('./routes/index');
var users = require('./routes/users');
var teacher = require('./routes/teacher');
var connector = require('./dataBase/config');

var app = express();
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

app.use('/', index);
app.use('/users', users);
app.use('/teacher', teacher);

app.listen(port, ()=>{
    console.log(`Cool !! app is Up and running @ port ${port}`);
})