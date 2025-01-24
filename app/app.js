"use strict";
var app = angular.module("MovieApp", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "/app/views/main.html",
      controller: "MainController",
    })
    .when("/signup", {
      templateUrl: "/app/views/signup.html",
      controller: "AuthController",
    })
    .when("/login", {
      templateUrl: "/app/views/login.html",
      controller: "AuthController",
    })

    .otherwise({
      redirectTo: "/",
    });
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true,
  });
});
