testApp.controller('loginController', loginController);
loginController.$inject = ['$scope', '$state', '$http'];

function loginController(scope, state, http) {
  scope.goToState = function(destinationState) {
    state.go(destinationState)
  }
  scope.login = function() {
    console.log("user email " + scope.userEmail);
    console.log("user password  " + scope.userPassword);

    http.get("/login?email=" + scope.userEmail + "&password=" + scope.userPassword).then(
      function(responseFromServer) {
        console.log("responseFromServer ", responseFromServer)
      }
    ).catch(function() {
      showErrorMessage("Invalid username/password!")
    })

  }
}

function showErrorMessage(msg) {
  $.notify({
    message: msg
  }, {
    type: 'danger'
  });
}
