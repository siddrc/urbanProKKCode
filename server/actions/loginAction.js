var router = require('express').Router();
var Database = require("../database/database");
router.get('/', function(req, res) {
    var userEmail = req.query.email;
    var userPassword = req.query.password;

    console.log("I am in server ........");

    console.log("User email "+userEmail);

    console.log("User password  "+userPassword);

    //Run a query
    //1. connect to database---done
    //2. get a handle to the collection ---??
    //3. run my query
    //4. get the results from the query and process accordingly
    var readParams = //get from UserModel--which will model out user collection
    var database = new Database();
    database.read()
    res.send();
});
//TODO : to verify query parameter in delete request
module.exports = router;