app.controller("AuthController", function ($scope, $location, $http, $window) {
  $scope.isSignUp = $location.path() === "/signup";

  $scope.toggleForm = function () {
    $scope.isSignUp = !$scope.isSignUp;
    const path = $scope.isSignUp ? "/signup" : "/login";
    $location.path(path);
  };

  $scope.submitSignUp = function () {
    // Sign-up logic here
    const userData = {
      username: $scope.username,
      email: $scope.email,
      password: $scope.password,
    };

    $http
      .post("http://localhost:3001/signup", userData)
      .then((response) => {
        alert("Sign-up successful! Redirecting to login...");
        console.log(userData.username);
        $scope.toggleForm();
      })
      .catch((error) => {
        alert(error.data.message || "Sign-up failed!");
        console.log(error.data.message);
      });
  };

  $scope.submitLogin = function () {
    // Login logic here
    const loginData = {
      email: $scope.email,
      password: $scope.password,
    };

    $http
      .post("http://localhost:3001/login", loginData)
      .then((response) => {
        alert("Login successful!");
        $window.location.href = "index.html";
      })
      .catch((error) => {
        alert(error.data.message || "Login failed!");
      });
  };
});
