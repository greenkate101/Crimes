var express = require('express');
var app = express();
var port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/lib'));
//remove this when we start buliding our sass
app.use(express.static(__dirname + '/src/css'));
//dirname

app.listen(port);