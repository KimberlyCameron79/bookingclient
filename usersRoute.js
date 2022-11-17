const { Router } = require("express");
const express = require("express");
const { reset } = require("nodemon");
const User = require("../models/User");
const router = express.Router();


router.post("/register", async (req, res) => {
    const newuser = new User({ name: req.body.name, email: req.body.email, password: req.body.password, cpassword: req.body.cpassword })

    try {
        const user = await newuser.save()
        res.send('User Registered Successfully')
    } catch (error) {
        return res.status(400).json({ error });

    }
});
router.post("/login", async (req, res) => {
    const { email, password } = req.body


    try {
        const user = await User.findOne({ email: email, password: password })
        if (user) {
            res.send(user)
        }
        else{
            return res.status(400).json({ message : "Login Failed" });
        }    
        } catch (error) {
            return res.status(400).json({ error });

        }
    }
    
);
router.get('/getAllUsers', async(req, res)=> {
    try {
        const users= await User.find()
        console.lot(users)
    } catch (error) {
        
        return res.status(400).json({ error });

    }
})

module.exports = router