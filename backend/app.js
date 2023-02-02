const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const PORT = 7000;


const app = express();
// connection to mongoose
require('./middlewares/mongoDB')


app.use(cors()) //to connect frontend and backend without any disturbance
app.use(express.json()) // to recieve data from front end
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

// API
// api of login and register
const api = require('./routes/api')
app.use('/api',api)



//connection to server
app.listen(PORT, () => {
    console.log(`...........Server running at ${PORT}.............`)
})


//frontend connection
const path = require('path');
app.use(express.static(path.join(__dirname +"/FrontEnd")));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/FrontEnd/index.html'));
    });