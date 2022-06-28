const asyncHandler = require('express-async-handler');
const User = require('../model/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const createUser = asyncHandler(async(req, res) => {

    // check if user already exists
    const { username } = req.body;
    const isUserExists = await User.findOne({username:username })
    if (isUserExists) {
        res.status(400);
        throw new Error("User already exists");
    }
    // hash the password

    const salt = await bcrypt.genSalt(10);
    const HashPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        password: HashPassword
    });

    if (newUser) {
        res.status(200).json({
            newUser: newUser
        });
    } else {
        res.status(400);
        throw new Error("Failed to create new user");
    }

});

const getUserData = asyncHandler(async(req, res) => {
    res.status(200).json({
        users: await User.find()
    });
});


const login = asyncHandler(async(req, res) => {
    const {username,password} = req.body;

    const  user = await User.findOne({username})
    if(user && (await bcrypt.compare(password,user.password)))
    {
        res.status(200).json({
            _id:user.id,
            username:user.username,
            token:GenerateJWT(user._id)
        });
    }

    res.status(422);
    throw new Error("Username or password is incorrect");

})

const GenerateJWT = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:"2d"
    });
}

module.exports = {
    createUser,
    getUserData,
    login
}