"use strict"

var express = require('express');
var app = express();
var routes = require('./routes')(app);
var nunjucks = require('nunjucks');
nunjucks.configure('/views');


var server = app.listen(process.env.APP_PORT, function() {
  console.log('Listening on http://0.0.0.0:%d', server.address().port);
});
