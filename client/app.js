angular.module('routeExample', [
  // You'll have to add ngRoute as a dependency at the root level of you app
  'ngRoute',
])

.config(function($routeProvider) {
  // Define your routes using $routeProvider
  // First parameter of when accepts your route definition
  // Second parameter, you are mapping information to be assigned to current route
  // Otherwise sets route definition that will be used on route change if no route is matched
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