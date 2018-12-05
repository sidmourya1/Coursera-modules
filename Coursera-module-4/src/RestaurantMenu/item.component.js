(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('itemList', {
      templateUrl: 'src/RestaurantMenu/templates/itemList.template.html',
      bindings: {
        items: '<'
      }
    }); 
})();