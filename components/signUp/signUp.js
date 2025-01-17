angular.module("signUp", []).component("signup", {
  templateUrl: "components/signUp/signUp.html",
  controller: function SearchBarCtrl($scope, searchBarService) {
    $scope.searchValue = "";

    $scope.search = function () {
      searchBarService.setQuery($scope.searchValue);
      console.log("Search initiated with query:", $scope.searchValue);
    };
  },
});
