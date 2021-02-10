import footer from './state.parts/footer.part';
import header from './state.parts/header.part';

export default {
    'url': '/product/:id',
    'views':{
        "header":header,
        "content": {
            'templateUrl': "templates/product/product.html",
            controller: [ '$scope' ,  'CartService' , 'product' , function ($scope , CartService , product){

                $scope.product = product;
                $scope.cart = CartService.getCart();
                $scope.product.isInCart = CartService.isInCart($scope.product.ProductID);
                
                $scope.amountChanged = ( amount ) => {
                    if( isNaN(+amount) || +amount <= 0 ){
                        $scope.product.amount = 1;
                    }
                };

                $scope.addToCart = () => {
                    CartService.addProduct($scope.product);
                    $scope.product.isInCart = true;
                };

            } ]
        },
        "footer": footer
    },
    'resolve': {

        'product': [ 'ProductService' , '$stateParams' , function ( ProductService , $stateParams){
            return ProductService.getProduct($stateParams.id);
        } ],
        'langs': [ 'LocaleService' , function ( LocaleService ){
            return LocaleService.getLangs();
        }  ]

    }
};
