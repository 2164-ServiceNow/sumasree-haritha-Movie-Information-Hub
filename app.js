'use strict';

let app=angular.module("movieApp",[
    "ngRoute"
])
app.config(function($routeProvider,$locationProvider){
    $routeProvider
    .when("/",{
        templateUrl:"sumasree-haritha-Movie-Information-Hub/pages/main.html"
    })
    .when("/navBar",{
        templateUrl:"sumasree-haritha-Movie-Information-Hub/pages/navBar.html"
    })

    $locationProvider.html5Mode({
        enabled:true,
        requireBase:false

    })
})

