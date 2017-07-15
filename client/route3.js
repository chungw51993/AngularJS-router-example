angular.module('routeExample')

.controller('Route3Ctrl', function($scope, $routeParams) {
  // You can access the url params by injecting $routeParams to your controller
  $scope.heading = 'id in the url params is ' + $routeParams.id;
});