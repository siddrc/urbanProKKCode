var testApp = angular.module("testApp", ['ui.router']);
testApp.config(singlPageRouting)
singlPageRouting.$inject = ['$stateProvider', '$urlRouterProvider'];

function singlPageRouting(stateProvider, urlRouterProvider) {
    urlRouterProvider.otherwise("/login");
    stateProvider.state('login', {
        url: "/login",
        controller: 'loginController',
        templateUrl: "views/welcome/login.html"
    }).state('signUp', {
        url: "/signUp",
        controller: 'signUpController',
        templateUrl: "views/welcome/signUp.html"
    }).state('forgotPassword', {
        url: "/forgotPassword",
        controller: 'forgotPasswordController',
        templateUrl: "views/welcome/forgotPassword.html"
    })
}

