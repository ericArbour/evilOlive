var app = angular.module('myModule');

app.factory('searchFactory', ['$http',function($http){

  var obj = {};
  var recipeArray = [];
  // console.log('factory works');
  obj.setSearch = function(userInput){
    console.log(userInput);
    $http({
      method: 'GET',
      url: 'https://community-food2fork.p.mashape.com/search?key=b5e7a2265c20832a3e572ad6ce2c5ebc&q=' + userInput,
      headers: {
        'X-Mashape-Key': '0ngYLs5AJmmshkhm9tUAQtiVyuzpp13kvEKjsnzMjozH8wa6rv',
        'Accept': 'application/json'
      }
    }).then(function(response) {
      recipeArray = response.data.recipes;
      console.log(response);
    }, function(error) {
      console.log(error);
    });
  }
  return obj;
}]);
