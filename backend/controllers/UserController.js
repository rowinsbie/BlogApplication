const asyncHandler = require('express-async-handler');
const User = require('../model/UserModel');


const createUser = asyncHandler(async(req,res) => {
    
    const newUser = await User.create({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        username:req.body.username,
        password:req.body.password
    });

    res.json({
        newUser:newUser
    })

});

const getUsers = asyncHandler(async(req,res) => {
    res.status(200).json({
        users:await User.find()
    });
});

module.exports = {
    createUser,
    getUsers
}