(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'src/RestaurantMenu/templates/categoryList.template.html',
      bindings: {
        categories: '<'
      }
    });
    
})();