'use strict'
var app = angular.module('MovieApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/main.html', 
            controller: 'MainController'
        })
        .when('/watchlist', {
            templateUrl: 'app/views/main.html',
            controller: 'topRatedMoviesController'
        })
        .when('/movie/:movieName', {
            templateUrl: 'app/views/movie-details.html',
            controller: 'movieDetailsController'
        })
        .when('/top-rated/:movieName', {
            templateUrl: 'app/views/topRatedMovieDetails.html',
            controller: 'topRatedMovieDetailsController'
        })
        .when('/RecentlyAddedMovies', {
            templateUrl: 'app/views/recentlyAddedMovies.html',
            controller:'recentlyAddedMoviesController'
        })
        .when('/RecentlyAddedMovies/:movieName', {
            templateUrl: 'app/views/recentlyAddedMovieDetails.html',
            controller: 'recentlyAddedMovieDetailsController'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });
}
)