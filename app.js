"use strict";

let app = angular.module("movieApp", []);
app.controller("AuthController", function ($scope, $window) {
  $scope.isSignUp = true;

  $scope.toggleForm = function () {
    $scope.isSignUp = !$scope.isSignUp;
  };

  $scope.submitSignUp = function () {
    console.log("User registered with:", {
      username: $scope.username,
      email: $scope.email,
      password: $scope.password,
    });

    // Redirect to login page
    alert("Sign-up successful! Redirecting to login...");
    $scope.toggleForm(); // Switch to login form
  };

  $scope.submitLogin = function () {
    console.log("User logged in with:", {
      email: $scope.email,
      password: $scope.password,
    });

    // Redirect to the main page (index.html)
    $window.location.href = "../../index.html";
  };
});

app.controller("LoginController", function ($scope, $window) {
  $scope.submitLogin = function () {
    console.log("User logged in with:", {
      email: $scope.email,
      password: $scope.password,
    });

    // Redirect to the main page (index.html)
    $window.location.href = "../../index.html";
  };
});
app.controller("SignUpController", function ($scope, $window) {
  $scope.submitSignUp = function () {
    console.log("User registered with:", {
      username: $scope.username,
      email: $scope.email,
      password: $scope.password,
    });

    // Redirect to login page
    $window.location.href = "../../components/login/login.html";
  };
});
app.controller("MainController", function ($scope, $http) {
  $scope.movies = [];
  $scope.watchlist = [];
  $scope.searchValue = "";
  $scope.showingWatchlist = false;
  $scope.selectedMovie = null;
  const apiKey = "9c6f32a";

  $scope.getMovies = function () {
    $scope.movies = [];
    const searchQueries = [
      "Batman",
      "Superman",
      "Thor",
      "Cricket",
      "Animal",
      "Ghost",
      "Remo",
    ];

    searchQueries.forEach((query) => {
      $http
        .get(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`)
        .then(function (response) {
          if (response.data && response.data.Search) {
            $scope.movies = $scope.movies.concat(response.data.Search);
          }
        })
        .catch(function (error) {
          console.error(`Error fetching movies for query: ${query}`, error);
        });
    });
  };

  $scope.search = function () {
    if ($scope.searchValue.trim() !== "") {
      $http
        .get(
          `https://www.omdbapi.com/?s=${$scope.searchValue}&apikey=${apiKey}`
        )
        .then(function (response) {
          if (response.data && response.data.Search) {
            $scope.movies = response.data.Search;
            $scope.showingWatchlist = false;
          } else {
            $scope.movies = [];
            alert("No movies found for search term.");
          }
        })
        .catch(function (error) {
          console.error("Error searching movies:", error);
        });
    } else {
      $scope.getMovies();
    }
  };
  $scope.goToLogin = function () {
    console.log("Redirecting to login page...");
    window.location.href = "components/login/login.html";
  };
  $scope.goToSignUp = function () {
    console.log("Redirecting to signup page...");
    window.location.href = "components/signUp/signUp.html";
  };

  $scope.loadAllMovies = function () {
    $scope.searchValue = "";
    $scope.getMovies();
    $scope.showingWatchlist = false;
  };

  $scope.addToWatchlist = function (movie) {
    if (!$scope.watchlist.includes(movie)) {
      $scope.watchlist.push(movie);
      alert(`${movie.Title} added to watchlist.`);
    } else {
      alert(`${movie.Title} is already in your watchlist.`);
    }
  };

  $scope.removeFromWatchlist = function (movie) {
    const index = $scope.watchlist.indexOf(movie);
    if (index > -1) {
      $scope.watchlist.splice(index, 1);
      alert(`${movie.Title} removed from watchlist.`);
    }
  };

  $scope.isInWatchlist = function (movie) {
    return $scope.watchlist.includes(movie);
  };

  $scope.showWatchlist = function () {
    $scope.showingWatchlist = true;
  };

  $scope.viewDetails = function (movie) {
    $scope.selectedMovie = movie;
  };

  $scope.closeDetails = function () {
    $scope.selectedMovie = null;
  };

  $scope.getMovies();
});
