const mongoose = require("mongoose");
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default:Date.now()
    },
    description:{
        type: String,
        required:true
    }

})

let categoryData = mongoose.model('categoryDetail',categorySchema)
module.exports = categoryData;