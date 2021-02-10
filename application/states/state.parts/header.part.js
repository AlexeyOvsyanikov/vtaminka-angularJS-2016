export default {
    "templateUrl": "templates/header.html",
    controller: [ '$scope' , 'CartService' , 'langs' , function ($scope, CartService , langs ){
        $scope.langs = langs;
        $scope.cart = CartService.getCart();
    } ]
};