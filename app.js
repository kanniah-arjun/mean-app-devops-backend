// importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

// initializing routes
const route = require('./routes/route');

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/userlist');

mongoose.connection.on('connected', () => {
    console.log('Connected to mongodb at port: 27017');
});

mongoose.connection.on('error', (err) => {
    if(err)
    {
        console.log('Error in database connection: ' +err);

    }
});

// initializing PORT
const PORT = 3000;

// adding middleware - cors
app.use(cors());

// adding middleware - body-parser
app.use(bodyparser.json());

// static files
app.use(express.static('./public'));

// route definitions
app.use('/api', route);

// testing server routing
app.get('/', (req, res, next) => {
    res.send('Server routing working as expected');
});

app.listen(PORT, () => {
    console.log('Server listening at port: ' +PORT);
});