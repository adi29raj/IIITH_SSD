const Users = require('../models/UserSchema')
const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router();

router.post('/', async (req, res) => {
    const { roll, password } = req.body

    if (!roll || !password)
        return res.status(400).json({ msg: 'Password and roll and role are required' })

    const user = await Users.findOne({ roll }) // finding user in db
    if (!user) return res.status(400).json({ msg: 'User doesnot exists.Please signup!' })
    if(password == user.password){
        return res.status(200).json({ msg: 'Login is succeessful!' })
    }

    // bcrypt.hash(password, 7, async (err, hash) => {
    //     if (err)
    //         return res.status(400).json({ msg: 'error while decoding the password' })
    //     if(hash == user.password){
    //         console.log("ddf");
    //         return res.status(200).json({ msg: 'Login is succeessful!' })
    //     }
    // })
})


module.exports = router