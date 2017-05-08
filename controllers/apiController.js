var app = angular.module('myModule');

app.controller('apiController', ['$scope', '$http', function($scope, $http) {
  alert('hi');
  $http({
    method: 'GET',
    url: 'https://community-food2fork.p.mashape.com/search?key=b5e7a2265c20832a3e572ad6ce2c5ebc&q=shredded+chicken%2C+mushrooms',
    headers: {
      'X-Mashape-Key': '0ngYLs5AJmmshkhm9tUAQtiVyuzpp13kvEKjsnzMjozH8wa6rv',
      'Accept': 'application/json'
    }
  }).then(function(response) {
    console.log(response)
  }, function(error) {
    console.log(error)
  });
  // $http.get('http://food2fork.com/api/search?key={b5e7a2265c20832a3e572ad6ce2c5ebc}&q=shredded%20chicken').then(function(response) {
  //   console.log(response);
  // }, function(error) {
  //   console.log(error)
  // });
}]);
