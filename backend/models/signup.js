const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var signupSchema = new Schema({
    name:{
        type:String,
        // unique:true
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        // required:true
    },
    createdAt:{
        type: Date,
        default:Date.now()
    },
    status:{
        type:String,
        default:null
    }
});

var signupdata = mongoose.model('signup', signupSchema); 

module.exports = signupdata;