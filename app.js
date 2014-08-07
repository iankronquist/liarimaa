"use strict"

var express = require('express');
var app = express();
var routes = require('./routes')(app)

var server = app.listen(process.env.APP_PORT, function() {
  console.log('Listening on port %d', server.address().port);
});
