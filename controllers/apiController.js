var app = angular.module('myModule');

app.controller('apiController', ['$scope', '$http', 'searchFactory', 'palFactory', function($scope, $http, searchFactory, palFactory) {
  $scope.searchArray = [];
  $scope.addIngredient = function () {
    $scope.searchArray.push($scope.item);
  }
  $scope.submit = function () {
    searchFactory.setSearch($scope.searchArray);
    searchFactory.getSearch().then(function(result){
      $scope.results = result;
      console.log($scope.results);
    }, function(error){
      console.log(error);
    });

    $scope.palResults = palFactory.testPal($scope.searchArray);
    console.log($scope.palResults);
  }
}]);
