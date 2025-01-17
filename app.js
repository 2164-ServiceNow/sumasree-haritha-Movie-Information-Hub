"use strict";
let app = angular.module("movieApp", []);

app.controller("MainController", function ($scope, $http) {
    $scope.movies = [];
    const apiKey = "9c6f32a";

    $scope.search = function () {
        if ($scope.searchValue) {
            $http
                .get(
                    `https://www.omdbapi.com/?s=${encodeURIComponent($scope.searchValue)}&apikey=${apiKey}`
                )
                .then(function (response) {
                    if (response.data && response.data.Search) {
                        $scope.movies = response.data.Search;
                    } else {
                        $scope.movies = [];
                        alert("No movies found for search term");
                    }
                })
                .catch(function (error) {
                    console.error("Error fetching movies from OMDB:", error);
                });
        } else {
            alert("Please enter a search term.");
        }
    };
});
