function UserDataModel(){
       this.collectionName = "users";
       this.dBData = {};
       this.callback = null;
}
UserDataModel.prototype.getReadModel = function(readParams){
	this.dBData.criteria = {
		"email" : readParams.email,
		"password" : readParams.password
	}
	this.dBData.projection = {};
	this.dBData.option = {};
	return this;
}
module.exports = UserDataModel;
