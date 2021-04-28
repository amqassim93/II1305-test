const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.render('homepage', {
        title: 'Welcome to H C Beales & Co',
        loggedIn: false
    });
});

module.exports = router;