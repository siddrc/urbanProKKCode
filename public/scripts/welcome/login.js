testApp.controller('loginController', loginController);
loginController.$inject = ['$scope','$state','$http'];

function loginController(scope,state,http) {
   scope.goToState = function(destinationState){
		state.go(destinationState)
   }
   scope.login = function(){
       console.log("user email "+scope.userEmail);
       console.log("user password  "+ scope.userPassword);

 
	// if server is on another machine and port ..consume like an API
	//http.get("http://localhost:8181/login?email")


    //http://localhost:3000/login------
    
    http.get("/login?email="+scope.userEmail+"&password="+scope.userPassword).then(
       function(){

       }
     
     ).catch(function(){


     })

   }
}
/*
callback(error,data){
	if(error){
	

	}else{
	  

	}

}
http.post("", ).success(
     
       function(){

       }
     
     ).error(function(){


     })
*/