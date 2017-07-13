angular.module('routeExample', [
  'ngRoute',
])

.config(function($routeProvider) {

  $routeProvider
    .when('/route1', {
      templateUrl: 'client/route1.html'
    })
    .when('/route2', {
      template: '<h1>This is the second route page!</h1>'
    })
    .when('/route/:id', {
      templateUrl: 'client/route3.html',
      controller: 'Route3Ctrl'
    })
    .otherwise({
      redirectTo: '/route1'
    });

});