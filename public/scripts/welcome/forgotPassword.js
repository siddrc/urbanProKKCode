testApp.controller('forgotPasswordController', forgotPasswordController);
forgotPasswordController.$inject = ['$scope','$state'];

function forgotPasswordController(scope,state) {
   scope.goToState = function(destinationState){
		state.go(destinationState)
   }
}