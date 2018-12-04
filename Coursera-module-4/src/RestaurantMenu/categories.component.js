(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('menuCategory', {
      templateUrl: 'src/RestaurantMenu/templates/categoryList.template.html',
      bindings: {
        categories: '<'
      }
    });
    
})();