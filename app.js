console.log("Starting server...");
console.log("Initiate URL mapping....");
var express = require('express');
var welcomePageAction = require("./server/actions/welcomePageAction");
var loginAction = require("./server/actions/loginAction");
//var bodyParser = require('body-parser');
var app = express();
app.listen(3000);
app.use('/', express.static(__dirname + '/public'));
//app.use(bodyParser.json());
app.use('/', welcomePageAction);
app.use('/login',loginAction);

///API's and action handlers
/*
 1 series --- Server : FYI 
 2 series --- Server : All good
 3 series --- Server : Go somewhere else 
 4 series --- Server : You fucked up
 5 series --- Server : I fucked up
*/
//http://localhost:3000/------

console.log("Server started at port 3000");