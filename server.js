// Require the Express Module
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json());

// Angular app 
app.use(express.static(__dirname + '/MeanApp/dist/' )); // <-- MAKE SURE YOU name YOUR Angular as "public", 
// or UPDATE this path appropriate to what you named your Angular directory.

// Mongoose config require
require('./server/config/mongoose.js');

// Require route for server.js
var routes_setter = require('./server/config/routes.js');
// Invoke route
routes_setter(app);

app.listen(8000, function() {
    console.log('Listening to port 8000');
})