var app = angular.module('myModule');

app.factory('palFactory', function(){

  var obj = {};
  var holder = [];

  obj.testPal = function(array){
      console.log(array);
      array.forEach(function(index){
         if (index === index.split('').reverse().join('')){
            holder.push(true);
         } else {
           holder.push(false);
         }
      });
      return holder;
   }
   return obj;
});
