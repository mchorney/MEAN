var bcrypt = require('bcryptjs');
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./client/static")));
app.use(session({ secret: 'codingdojorocks' }));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

var route_setter = require('./server/config/routes.js');
route_setter(app);

var server = app.listen(8000, function () {
    console.log("listening on port 8000");
});