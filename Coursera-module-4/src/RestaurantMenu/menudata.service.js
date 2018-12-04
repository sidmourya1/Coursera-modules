(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('API_URL', 'https://davids-restaurant.herokuapp.com/');

    MenuDataService.$inject = ['$http', 'API_URL'];
    function MenuDataService($http, API_URL) {
        let service = this;

        service.getAllCategories = function () {
            return $http({ method: "GET", url: (API_URL + 'categories.json') })
                .then(function success(response) {
                    return response.data;
                }).catch(function (error) {
                    console.log("Something went wrong while getting categories. " + error.message);
                });
        };

        service.getItemsForCategory = function (categoryShortName) {
            console.log("Category short name : " + categoryShortName);
            return $http({ method: "GET", url: (API_URL + 'menu_items.json?category='+categoryShortName) })
            .then(function success(response) {
                let items = response.data.menu_items;
                return items;
            }).catch(function (error) {
                console.log("Something went wrong while getting items. " + error.message);
            });
        };
    }
})();
