(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('itemList', {
      templateUrl: 'src/RestaurantMenu/templates/item.template.html',
      bindings: {
        items: '<'
      }
    });
    
})();