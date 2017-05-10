console.log("Starting server...");
console.log("Initiate URL mapping....");
var express = require('express');
var welcomePageAction = require("./server/actions/welcomePageAction");
var app = express();
app.listen(3000);
app.use('/', express.static(__dirname + '/public'));
app.use('/', welcomePageAction);
console.log("Server started at port 3000");