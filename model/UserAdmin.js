const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Users = new Schema({
    username:String,
    email:String,
    password:String
})
module.exports = mongoose.model('user' , Users)