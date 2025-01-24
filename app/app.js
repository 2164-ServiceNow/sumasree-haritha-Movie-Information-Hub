'use strict'
var app = angular.module('MovieApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'sumasree-haritha-Movie-Information-Hub/app/views/main.html', 
            controller: 'MainController'
        })
        .when('/login', {
            templateUrl: 'sumasree-haritha-Movie-Information-Hub/app/views/login.html',
        })
        .when('/signup', {
            templateUrl: 'sumasree-haritha-Movie-Information-Hub/app/views/signup.html',
        })
        .otherwise({
            redirectTo: '/',
            
        });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });
}
)