var MongoClient = require('mongodb').MongoClient

function Database(){
  this.url = "mongodb://localhost:27017/ubprokkcode";
}
function connect(dBparams,dbCRUDAction) {
    MongoClient.connect(this.url, function(err, dbConnection) {
        dbCRUDAction(dbConnection,dBparams)
    }) 
}
Database.prototype.read = function(readParams){
    connect(readParams,find);
}
function find(dbConnection,dBparams){
   var collection = dbConnection.collection(dBparams.collection);
   collection.find(dBparams.criteria,dBparams.projection,dBparams.options)
}
Database.prototype.create = function(createParams){
    connect(createParams,insert);
}
function insert(){
    
}
//Create
//Delete
//Update
module.exports = Database
 
    
