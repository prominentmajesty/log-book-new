var exprress =  require('express');

var router = exprress.Router();

router.get('/', (req, res)=>{
    res.render('home', { 
        title : 'Home',
        style : 'index.css',
        script : 'index.js'
    });
});
module.exports = router;