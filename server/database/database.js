var MongoClient = require('mongodb').MongoClient;
var Dbprops = require("./dbprops");
//internal objects to hide implementations

function DbConn(dbURL){
  this.dbURL = dbURL;
}
DbConn.prototype.connect = function(dBparams,dbCRUDAction) {
    MongoClient.connect(this.dbURL, function(err, dbConnection) {
        dbCRUDAction(dbConnection,dBparams)
    }) 
}
function Database(){
  this.dbprops = new Dbprops()
  this.dbConn = new DbConn(this.dbprops.getDbURL());
}

Database.prototype.read = function(readParams){
   this.dbConn.connect(readParams,find);
}
function find(dbConnection,dBparams){
   var collection = dbConnection.collection(dBparams.collectionName);
   collection.find(dBparams.dBData.criteria,dBparams.dBData.projection,dBparams.dBData.options)
   .toArray(function(error,docs){
    if(error == undefined || error == null){
    	console.log("Docs "+JSON.stringify(docs,null,2));
    	dBparams.callback(docs);

    }
    }
   )
}
Database.prototype.create = function(createParams){
    this.dbConn.connect(createParams,insert);
}
function insert(){
    
}
//Create
//Delete
//Update
module.exports = Database;
 
    
