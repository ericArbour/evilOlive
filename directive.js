var app = angular.module('myModule');

app.directive('placeRecipe', function(){
return {
    restrict:'E',
    templateUrl:'recipeTemplate.html',
    replace: false
  }
});

app.directive('placePals', function(){
return {
    restrict:'E',
    templateUrl:'palTemplate.html',
    replace: false
  }
});
