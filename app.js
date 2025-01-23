"use strict";

let app = angular.module("movieApp", []);
// 1
// app.config(function ($routeProvider) {
//   $routeProvider
//     .when("/login", {
//       templateUrl: "components/login/login.html",
//       controller: "LoginController",
//     })
//     .when("/signup", {
//       templateUrl: "components/signUp/signUp.html",
//       controller: "SignUpController",
//     })
//     .when("/movies", {
//       templateUrl: "./index.html", // Path to your main movie page
//       controller: "MainController",
//     })
//     .otherwise({
//       redirectTo: "/movies", // Default route
//     });
// });

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
    // $window.location.href = "#/movies"; // Redirect using route
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
    // $window.location.href = "#/movies"; // Redirect using route
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
    // $window.location.href = "#/login"; // Redirect using route
  };
});
app.controller("MainController", function ($scope, $http, $window) {
  $scope.movies = [];
  $scope.watchlist = [];
  $scope.searchValue = "";
  $scope.showingWatchlist = false;
  $scope.selectedMovie = null;
  const apiKey = "9c6f32a";
  $scope.filteredMovies = [];
  $scope.errorMessage = null; // Initialize errorMessage property

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
            $scope.filteredMovies = $scope.movies;
          }
        })
        .catch(function (error) {
          console.error(`Error fetching movies for query: ${query}`, error);
        });
    });
  };
  // only name of the movie
  // $scope.search = function () {
  //   if ($scope.searchValue.trim() !== "") {
  //     $http
  //       .get(
  //         `https://www.omdbapi.com/?s=${$scope.searchValue}&apikey=${apiKey}`
  //       )
  //       .then(function (response) {
  //         if (response.data && response.data.Search) {
  //           $scope.movies = response.data.Search;
  //           $scope.showingWatchlist = false;
  //         } else {
  //           $scope.movies = [];
  //           alert("No movies found for search term.");
  //         }
  //       })
  //       .catch(function (error) {
  //         console.error("Error searching movies:", error);
  //       });
  //   } else {
  //     $scope.getMovies();
  //   }
  // };
  // year and movie
  // $scope.search = function () {
  //   $scope.errorMessage = ""; // Reset error message before each search
  //   if ($scope.searchValue.trim() !== "") {
  //     if (!isNaN($scope.searchValue)) {
  //       // Input is a year, filter movies locally
  //       const year = $scope.searchValue;
  //       $scope.filteredMovies = $scope.movies.filter(
  //         (movie) => movie.Year === year
  //       );

  //       if ($scope.filteredMovies.length === 0) {
  //         // alert("No movies found for the entered year.");
  //         $scope.errorMessage = "No movies found for the entered year.";
  //         $window.location.href = "../../index.html";
  //       }
  //     } else {
  //       // Input is a name, fetch movies from API
  //       $http
  //         .get(
  //           `https://www.omdbapi.com/?s=${$scope.searchValue}&apikey=${apiKey}`
  //         )
  //         .then(function (response) {
  //           if (response.data && response.data.Search) {
  //             $scope.movies = response.data.Search;
  //             $scope.filteredMovies = $scope.movies;
  //           } else {
  //             $scope.movies = [];
  //             // alert("No movies found for the search term.");
  //             $scope.errorMessage = "No movies found for the search term.";
  //             $window.location.href = "../../index.html";
  //           }
  //         })
  //         .catch(function (error) {
  //           console.error("Error searching movies:", error);
  //         });
  //     }
  //   } else {
  //     alert("Please enter a search term!");
  //   }
  // };

  // year ,movie name with error message
  $scope.search = function () {
    $scope.errorMessage = ""; // Reset error message before each search
    if ($scope.searchValue.trim() !== "") {
      if (!isNaN($scope.searchValue)) {
        // Input is a year, filter movies locally
        const year = $scope.searchValue;
        $scope.filteredMovies = $scope.movies.filter(
          (movie) => movie.Year === year
        );

        if ($scope.filteredMovies.length === 0) {
          $scope.errorMessage = "No movies found for the entered year.";
          // Don't redirect yet, let the error message show up
        }
      } else {
        // Input is a name, fetch movies from API
        $http
          .get(
            `https://www.omdbapi.com/?s=${$scope.searchValue}&apikey=${apiKey}`
          )
          .then(function (response) {
            if (response.data && response.data.Search) {
              $scope.movies = response.data.Search;
              $scope.filteredMovies = $scope.movies;
            } else {
              $scope.movies = [];
              $scope.errorMessage = "No movies found for the search term.";
            }
          })
          .catch(function (error) {
            console.error("Error searching movies:", error);
            $scope.errorMessage = "An error occurred while searching.";
          });
      }
    } else {
      $scope.errorMessage = "Please enter a search term!";
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
