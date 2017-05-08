var app = angular.module('myModule');

app.directive('placeRecipe', function(){
return {
    restrict:'E',
    templateUrl:'recipeTemplate.html',
    replace: false
  }
});
