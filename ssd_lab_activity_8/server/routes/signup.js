const Users = require('../models/UserSchema')
const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router();

router.post('/', async (req, res) => {
    const { roll, password, role } = req.body

    if (!roll || !password || !role)
        return res.status(400).json({ msg: 'Password and roll and role are required' })

    const user = await Users.findOne({ roll }) // finding user in db
    if (user) return res.status(400).json({ msg: 'User already exists' })

    const newUser = new Users({ roll, password })
    const savedUserRes = await newUser.save()

    if (savedUserRes)
        return res.status(200).json({ msg: 'User is successfully saved' })
        
    // hasing the password
    // bcrypt.hash(password, 7, async (err, hash) => {
    //     if (err)
    //         return res.status(400).json({ msg: 'error while saving the password' })

    //     newUser.password = hash
    //     const savedUserRes = await newUser.save()

    //     if (savedUserRes)
    //         return res.status(200).json({ msg: 'User is successfully saved' })
    // })
})


module.exports = router