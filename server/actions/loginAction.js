var router = require('express').Router();
var Database = require("../database/database");
var UserDataModel = require("../models/userDataModel");
//http://localhost:3000/login
router.get('/', function(req, res) {
    var userEmail = req.query.email;
    var userPassword = req.query.password;
    var userDataModel = new UserDataModel();
    var readParams = {
        email: userEmail,
        password : userPassword
    };
    userDataModel = userDataModel.getReadModel(readParams)
    var database = new Database();
    userDataModel.callback = function(dBData){   
        res.send(dBData);
    }
    database.read(userDataModel);
});
module.exports = router;