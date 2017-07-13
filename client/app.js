angular.module('routeExample', [
  'ngRoute'
])

.config(function($routeProvider) {

  $routeProvider
    .when('/route1', {
      templateUrl: 'client/route1.html',
      controller: 'Route1'
    })
    .when('/route2', {
      templateUrl: 'client/route2.html',
      controller: 'Route2'
    })
    .when('/route/:id', {
      templateUrl: 'client/route3.html',
      controller: 'Route3'
    })
    .otherwise({
      redirectTo: '/route1'
    });

});