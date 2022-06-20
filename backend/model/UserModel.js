const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    first_name:{
        type:String,
        required:[true,"First Name is required"]
    },
    last_name:{
        type:String,
        required:[true,"Last Name is required"]
    },
    username:{
        type:String,
        required:[true,"Username is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    }
},{
    
timestamps:true
})

module.exports = mongoose.model('User',UserSchema);