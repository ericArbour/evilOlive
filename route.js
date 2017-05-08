var app = angular.module('myModule');

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'apiController'
  }).when('/pal', {
    templateUrl: 'views/pal.html',
    controller: 'palController'
  }).otherwise({
    redirectTo: '/'
  })
});
