const mongoose = require('mongoose') //db
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://vaishakkrishnan:11Knights@fsdmain.4y3vqzk.mongodb.net/Internship?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}). then(()=>{
    console.log('mongoDB connected successfully!!!')
}).catch((error)=>{
    console.log(error.message)
})