(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

            // Home page
            .state('home', {
                url: '/',
                templateUrl: 'src/RestaurantMenu/templates/home.template.html'
            })

            // Premade list page
            .state('categoryList', {
                url: '/category-list',
                templateUrl: 'src/RestaurantMenu/templates/menuApp.template.html',
                controller: 'MainMenuAppController as mainList',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            // Item detail
            .state('itemDetail', {
                url: '/item-detail/{itemId}',
                templateUrl: 'src/RestaurantMenu/templates/item-detail.template.html',
                controller: 'ItemDetailController as itemDetail',
                resolve: {
                    items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
                        return MenuDataService.getAllCategories()
                        .then(function (categories){
                            return MenuDataService.getItemsForCategory(categories[$stateParams.itemId].short_name);
                        });
                    }]
                }
            });
    }
})();