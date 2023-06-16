var express = require('express');
var server = express()

var routes = require('./routes');
const cors =  require('cors');

server.use(express.json());
server.use(routes);
server.use(cors());



var mongoose = require('mongoose');

mongoose
    .connect('mongodb://127.0.0.1:27017/dashboard')
    .then((res) => console.log(`${res}`));


server.listen(8000, function check(error) {
    if(error) {
        console.log("error")
    } else {
        console.log("started")
    }
});


