const asyncHandler = require('express-async-handler');
const User = require('../model/UserModel');
let bcrypt = require('bcrypt');

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
    res.status(200).json({
        mess: "login"
    });
})

module.exports = {
    createUser,
    getUserData,
    login
}