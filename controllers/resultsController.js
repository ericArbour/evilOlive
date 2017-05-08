var app = angular.module('myModule');

app.controller('resultsController', function($scope, searchFactory){
  console.log('2nd controller works!');

$scope.testSearch = function(){
    searchFactory.getSearch().then(function(result){
      $scope.results = result;
      console.log($scope.results);
    }, function(error){
      console.log(error);
    });
  }
});
