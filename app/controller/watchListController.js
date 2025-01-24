app.controller("WatchListController", function ($scope) {
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
})
//   $scope.viewDetails = function (movie) {
//     $scope.selectedMovie = movie;
//   };

//   $scope.closeDetails = function () {
//     $scope.selectedMovie = null;
//   };