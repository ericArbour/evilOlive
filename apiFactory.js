var app = angular.module('myModule');

app.factory('searchFactory', ['$http',function ($http) {

  var obj = {};
  var recipeArray = [];
  var inputs;
  obj.setSearch = function (userInput) {
    inputs = userInput;
    // console.log(userInput);
    var promise = $http({
      method: 'GET',
      url: 'https://community-food2fork.p.mashape.com/search?key=b5e7a2265c20832a3e572ad6ce2c5ebc&q=' + userInput,
      headers: {
        'X-Mashape-Key': '0ngYLs5AJmmshkhm9tUAQtiVyuzpp13kvEKjsnzMjozH8wa6rv',
        'Accept': 'application/json'
      }
    }).then(function (response) {
       recipeArray = response.data.recipes;
      // console.log(response);
    }, function(error) {
        return error;
    });
    return promise;
  }
  obj.getSearch = function () {
    return recipeArray;
  }
  obj.getInputs = function () {
    return inputs;
  }
  return obj;
}]);
