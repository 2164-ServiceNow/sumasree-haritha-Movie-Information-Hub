"use strict";

angular
  .module("movieApp", ["ngRoute"])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "./components/home/home.html",
        controller: "homeController",
      })
      .when("/signup", {
        templateUrl: "./components/signUp/signUp.html",
        controller: "SignupController",
      })
      .when("/login", {
        templateUrl: "./components/login/login.html",
        controller: "LoginController",
      })
      .otherwise({
        redirectTo: "/",
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false,
    });
  });

angular
  .module("movieApp")
  .controller("homeController", function ($scope, $location) {
    $scope.goToSignup = function () {
      $location.path("/signup");
    };
  });

angular
  .module("movieApp")
  .controller("SignupController", function ($scope, $location) {
    $scope.goToLogin = function () {
      $location.path("/login");
    };
  });
