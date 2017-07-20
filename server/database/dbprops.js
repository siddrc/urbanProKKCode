var dbprops = require("./dbprops.json");
class DbProps {
  constructor() {
    this.getDbURL = function() {
      return "mongodb://" + getDbAddress() + ":" + getDbPort() + "/" + getDbName();
    }

    function getDbAddress() {
      return dbprops.dbAddress;
    }

    function getDbPort() {
      return dbprops.dbPort;
    }

    function getDbName() {
      return dbprops.dbName;
    }
  }

}
module.exports = DbProps;
