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

            // Menu Categories
            .state('categories', {
                url: '/category-list',
                templateUrl: 'src/RestaurantMenu/templates/category.template.html',
                controller: 'CategoryController as categoryCtrl',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            // Menu Items
            .state('items', {
                url: '/item-list/{itemId}',
                templateUrl: 'src/RestaurantMenu/templates/item.template.html',
                controller: 'ItemController as itemCtrl',
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