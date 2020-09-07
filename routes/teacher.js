const express = require('express');

const router = express.Router();

router.get('/teacher', function(req, res){
    res.render('teacher', {
        title : 'Adviser Page',
        style : 'teacher.css',
        script : 'teacher.js'
    });
});

module.exports = router;