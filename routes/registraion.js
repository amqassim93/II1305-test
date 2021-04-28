const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Worker = require('../models/workers');

router.get('/', (req, res) => {
    res.render('registration')
})

router.post('/', async (req, res) => {
    let { name,username,password } = req.body;
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        var worker = new Worker(req.body);
        var result = await worker.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;