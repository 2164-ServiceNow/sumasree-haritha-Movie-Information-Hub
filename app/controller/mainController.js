app.controller("MainController", function ($scope, $http) {
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
    // year ,movie name with error message
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
    //         $scope.errorMessage = "No movies found for the entered year.";
    //         // Don't redirect yet, let the error message show up
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
    //             $scope.errorMessage = "No movies found for the search term.";
    //           }
    //         })
    //         .catch(function (error) {
    //           console.error("Error searching movies:", error);
    //           $scope.errorMessage = "An error occurred while searching.";
    //         });
    //     }
    //   } else {
    //     $scope.errorMessage = "Please enter a search term!";
    //   }
    // };
  
    // $scope.goToLogin = function () {
    //   console.log("Redirecting to login page...");
    //   window.location.href = "components/login/login.html";
    // };
    // $scope.goToSignUp = function () {
    //   console.log("Redirecting to signup page...");
    //   window.location.href = "components/signUp/signUp.html";
    // };
  
    $scope.loadAllMovies = function () {
      $scope.searchValue = "";
      $scope.getMovies();
      $scope.showingWatchlist = false;
    };
  
    // $scope.addToWatchlist = function (movie) {
    //   if (!$scope.watchlist.includes(movie)) {
    //     $scope.watchlist.push(movie);
    //     alert(`${movie.Title} added to watchlist.`);
    //   } else {
    //     alert(`${movie.Title} is already in your watchlist.`);
    //   }
    // };
  
    // $scope.removeFromWatchlist = function (movie) {
    //   const index = $scope.watchlist.indexOf(movie);
    //   if (index > -1) {
    //     $scope.watchlist.splice(index, 1);
    //     alert(`${movie.Title} removed from watchlist.`);
    //   }
    // };
  
    // $scope.isInWatchlist = function (movie) {
    //   return $scope.watchlist.includes(movie);
    // };
  
    // $scope.showWatchlist = function () {
    //   $scope.showingWatchlist = true;
    // };
  
    // $scope.viewDetails = function (movie) {
    //   $scope.selectedMovie = movie;
    // };
  
    // $scope.closeDetails = function () {
    //   $scope.selectedMovie = null;
    // };
  
    $scope.getMovies();
  });