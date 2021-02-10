import footer from './state.parts/footer.part';
import header from './state.parts/header.part';

export default {
    'url': '/checkout',
    'views':{
        "header":header,
        "content": {
            'templateUrl': "templates/checkout/checkout.html",
            controller: [ '$scope' ,  'CartService' , 'ProductService' , function ($scope , CartService , ProductService){

                $scope.cart = CartService.getCart();
                $scope.cartForView =  $scope.cart.map( p => ({...p}) );

                $scope.cartTotal = 0;
                $scope.delivery = 198;
                $scope.cartTotalItemsAmount = 0;

                ProductService.getProducts().then( products => {
                    $scope.cartForView.forEach( item => {
                        const product = products.find( p => +p.ProductID === +item.ProductID );

                        if(product){
                            item.ProductTitle = product.ProductTitle;
                            item.description = product.description;
                        }
                    } );

                    $scope.reloadCartTotal();

                });

                $scope.reloadCartTotal = () => {
                    $scope.cartTotal = $scope.cart.map( p => p.ProductPrice * p.amount ).reduce( (acc , current) => acc + current , 0 );
                    $scope.cartTotalItemsAmount =  $scope.cart.length;
                };

            } ]
        },
        "footer": footer
    },
    'resolve': {

        'langs': [ 'LocaleService' , function ( LocaleService ){
            return LocaleService.getLangs();
        }  ]

    }
};
