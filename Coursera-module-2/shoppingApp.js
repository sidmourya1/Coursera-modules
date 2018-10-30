(function () {

    'use strict';

    angular.module('shoppingApp', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {

        var toBuy = this;
        toBuy.itemsToBuy = ShoppingListCheckOffService.getToBuyList();
        toBuy.BuyThisItem = function (index) {
            ShoppingListCheckOffService.buyAnItem(index);
        }
    }

    AlreadyBoughtController.inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {

        var alreadyBought = this;
        alreadyBought.itemsBought = ShoppingListCheckOffService.getAlreadyBoughtList();
    }

    function ShoppingListCheckOffService() {

        var service = this;
        var toBuyList = [{ name: "cookies", quantity: 10 }, { name: "chips", quantity: 5 }, { name: "soft drinks", quantity: 15 },
        { name: "water bottles", quantity: 20 }, { name: "disposable cups", quantity: 25 }];

        var alreadyBoughtList = [];

        service.buyAnItem = function (index) {
            alreadyBoughtList.push(toBuyList[index]);
            toBuyList.splice(index, 1);
        }

        service.getToBuyList = function () {
            return toBuyList;
        }

        service.getAlreadyBoughtList = function () {
            return alreadyBoughtList;
        }
    }

})();
