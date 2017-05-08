var app = angular.module('myModule');

app.controller('apiController', ['$scope', '$http', 'searchFactory', function($scope, $http, searchFactory) {
  $scope.searchArray = [];
  $scope.addIngredient = function () {
    $scope.searchArray.push($scope.item);
  }
  $scope.submit = function () {
    searchFactory.setSearch($scope.searchArray);
  }
}]);
