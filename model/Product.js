const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Product = new Schema({
    img:String,
    name:String,
    link:String
})
module.exports = mongoose.model('product' , Product)