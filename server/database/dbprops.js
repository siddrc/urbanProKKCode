
var dbprops = require("./dbprops.json");
function DbProps(){

}
function getDbAddress(){
  return dbprops.dbAddress;
}
function getDbPort(){
 return dbprops.dbPort;
}
function getDbName(){
 return dbprops.dbName;
}

DbProps.prototype.getDbURL = function(){
  return "mongodb://"+getDbAddress()+":"+getDbPort()+""+getDbName();
}
module.exports = DbProps;