var app = angular.module('myModule');

app.controller('palController', ['$scope', 'searchFactory', 'palFactory', function($scope, searchFactory, palFactory) {
  $scope.searchArray = searchFactory.getInputs();
  $scope.palResults = palFactory.testPal($scope.searchArray);
  console.log($scope.palResults);
}]);
