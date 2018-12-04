(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('categoryList', {
      templateUrl: 'src/RestaurantMenu/templates/categoryList.template.html',
      bindings: {
        categories: '<'
      }
    });
    
})();