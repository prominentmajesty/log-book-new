const express = require('express');

const router = express.Router();

router.get('/users', (req, res) => {
    res.render('users', {
        title : 'Dashboard',
        style : 'users.css',
        script : 'users.js'
    })
})

module.exports = router;