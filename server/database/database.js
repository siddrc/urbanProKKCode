var MongoClient = require('mongodb').MongoClient

function Database(){
  this.url = "mongodb://localhost:27017/ubprokkcode";
}
Database.prototype.connect = function(dBparams,dbCRUDAction) {
    MongoClient.connect(this.url, function(err, dbConnection) {
        dbCRUDAction(dbConnection,dBparams)
    }) 
}
Database.prototype.read = function(readParams){
	console.log("this in read ",this);
    this.connect(readParams,find);
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
    connect(createParams,insert);
}
function insert(){
    
}
//Create
//Delete
//Update
module.exports = Database;
 
    
