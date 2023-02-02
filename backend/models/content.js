const mongoose = require("mongoose");
const Schema = mongoose.Schema

const contentSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    creator:{
        type: String
    },
    category:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default:Date.now()
    },
    content:{
        type: String,
        required:true
    }

})

let contentData = mongoose.model('contentDetail',contentSchema)
module.exports = contentData;