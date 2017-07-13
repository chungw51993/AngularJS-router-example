angular.module('routeExample')

.controller('Route3', function($scope, $routeParams) {
  $scope.header = 'id in the url params is ' + $routeParams.id;
});