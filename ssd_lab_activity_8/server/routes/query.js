const Query = require('../models/QuerySchema')
// const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router();

router.post('/', async (req, res) => {
    const { comment, qNo, course , exam ,std_roll} = req.body

    const newQuery = new Query({ exam_name:exam, course_name:course, question_num:qNo,std_roll:std_roll,std_comment:comment,IsActive:true })
    const savedQuery = await newQuery.save()

    if (savedQuery)
        return res.status(200).json({ msg: 'Query is successfully saved' })
        
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