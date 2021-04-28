const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Worker = require('../models/workers');

router.get('/',(req,res)=>{
    res.render('login')
})

router.post('/',async(req,res)=>{
    let {username,password} = req.body;
    var worker = await Worker.findOne({username: req.body.username});
    if(!worker){
        return res.status(400).send({ message: "The username does not exist" });
    }
    if(!bcrypt.compareSync(req.body.password, worker.password)) {
        return res.status(400).send({ message: "The password is invalid" });
    }
    res.send({ message: "The username and password combination is correct!" });
})

module.exports=router;