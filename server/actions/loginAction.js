var router = require('express').Router();
router.get('/', function(req, res) {
    var userEmail = req.query.email;
    var userPassword = req.query.password;

    console.log("I am in server ........");

    console.log("User email "+userEmail);

    console.log("User password  "+userPassword);

    res.send();
});
//TODO : to verify query parameter in delete request
module.exports = router;