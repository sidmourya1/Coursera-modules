(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('MainMenuAppController', MainMenuAppController);
    
    
    MainMenuAppController.$inject = ['MenuDataService', 'categories'];
    function MainMenuAppController(MenuDataService, categories) {
      var mainList = this;
      mainList.categories = categories;
    }
})(); 