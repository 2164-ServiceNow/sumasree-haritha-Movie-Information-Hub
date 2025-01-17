"use strict";
let app = angular.module("movieApp", []);

// app.config(function ($routeProvider) {
//   $routeProvider
//     .when("/signup", {
//       templateUrl: "pages/signUp.html", // Your signup page template
//       controller: "SignupController", // You can define a controller if needed
//     })

// });

app.controller("MainController", function ($scope, $http) {
  $scope.movies = [];
  const apiKey = "9c6f32a";

  // Function to fetch all movies initially
  $scope.getMovies = function () {
    const searchQueries = [
      "Batman",
      "Superman",
      "Thor",
      "Cricket",
      "animal",
      "ghost",
      "remo",
    ];
    searchQueries.forEach((query) => {
      $http
        .get(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`)
        .then(function (response) {
          if (response.data && response.data.Search) {
            $scope.movies = $scope.movies.concat(response.data.Search);
          } else {
            console.error(`No movies found for query: ${query}`);
          }
        })
        .catch(function (error) {
          console.error(`Error fetching movies for query: ${query}`, error);
        });
    });
  };

  // Function to search movies based on user input
  $scope.search = function () {
    if ($scope.searchValue) {
      $http
        .get(
          `https://www.omdbapi.com/?s=${$scope.searchValue}&apikey=${apiKey}`
        )
        .then(function (response) {
          if (response.data && response.data.Search) {
            $scope.movies = response.data.Search; // Update the movies list to show only search results
          } else {
            $scope.movies = [];
            console.error(
              "No movies found for search term:",
              $scope.searchValue
            );
            alert("No movies found for search term");
          }
        })
        .catch(function (error) {
          console.error("Error fetching movies from OMDB:", error);
        });
    } else {
      // If the search input is empty, show all movies
      $scope.getMovies();
    }
  };

  // Function to load all movies when the Home link is clicked
  $scope.loadAllMovies = function () {
    $scope.searchValue = ""; // Clear search input
    $scope.getMovies(); // Fetch all movies
  };

  // Initialize the movie list when the page loads
  $scope.getMovies();
});
