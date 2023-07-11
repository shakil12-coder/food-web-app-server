const mongoose = require("mongoose")


//create schema
const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    location : {
        type : String,
        required : true
    },
    email : {
        type : String ,
        required: true
    },
    password : {
        type : String,
        reuired : true
    },
    date : {
        type : Date,
        default : Date.now
    }
})


//crete model
const user = mongoose.model('user' , UserSchema);

module.exports = user;