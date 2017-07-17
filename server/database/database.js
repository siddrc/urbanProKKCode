var MongoClient = require('mongodb').MongoClient;
var Dbprops = require("./dbprops");
//internal objects to hide implementations
function DbConn() {
  //this.dbprops = new Dbprops()
  this.dbURL = this.dbprops.getDbURL();
}
DbConn.prototype.connect = function(dBparams, dbCRUDAction) {
  MongoClient.connect(this.dbURL, function(err, dbConnection) {
    dbCRUDAction(dbConnection, dBparams)
  })
}
class Database {
  constructor() {
    this.dbConn = new DbConn();
    this.findHandler = function(dbConnection, dBparams) {
      find(dbConnection, dBparams)
    }
    this.createHandler = function(dbConnection, dBparams) {
      insert(dbConnection, dBparams);
    }

    function find(dbConnection, dBparams) {
      var collection = dbConnection.collection(dBparams.collectionName);
      collection.find(dBparams.dBData.criteria, dBparams.dBData.projection, dBparams.dBData.options).toArray(function(error, docs) {
        if (error == undefined || error == null) {
          console.log("Docs " + JSON.stringify(docs, null, 2));
          dbConnection.close()
          dBparams.callback(docs);
        }
      })
    }

    function insert(databaseConnection, dbCreateParams) {
      var collection = databaseConnection.collection(dbCreateParams.collectionName);
      collection.insert(dbCreateParams.dbData,
        function(err, result) {
          var responseObject = ErrorAndResponseWrapper.wrapResponseAndError(err, result);
          databaseConnection.close();
          dbCRUDParams.callback(responseObject, dbCRUDParams.theThisInstance);
        });
    }
    function cleanUp(){
      databaseConnection.close();
      dbCRUDParams.callback(responseObject, dbCRUDParams.theThisInstance);
    }
  }
  read(readParams) {
    this.dbConn.connect(readParams, this.findHandler);
  }
  create(createParams) {
    this.dbConn.connect(createParams, this.createHandler);
  }

}



Database.prototype.create = function(createParams) {

}

function insert() {

}
//Create
//Delete
//Update
module.exports = Database;
