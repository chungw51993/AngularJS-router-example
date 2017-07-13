angular.module('routeExample')

.controller('Route3Ctrl', function($scope, $routeParams) {
  $scope.heading = 'id in the url params is ' + $routeParams.id;
});