(function () {

    'use strict';

    angular.module('lunchApp', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.inject = ['$scope'];

    function LunchCheckController($scope) {

        $scope.lunchItems;
        $scope.message;
        $scope.color;

        $scope.getNumberOfItems = function () {
            if (!($scope.lunchItems === undefined) && !($scope.lunchItems === "")) {
                var lunchArray = $scope.lunchItems.split(",");

                if (lunchArray.length <= 3) {
                    $scope.message = "Enjoy!";
                    $scope.color = "green";
                }
                else {
                    $scope.message = "Too much!";
                    $scope.color = "green";
                }
            }
            else {
                $scope.message = "Please enter data first";
                $scope.color = "red";
            }
        };
    }
})();
