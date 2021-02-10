import footer from './state.parts/footer.part';
import header from './state.parts/header.part';

export default {
    'url': '/cart',
    'views':{
        "header":header,
        "content": {
            'templateUrl': "templates/cart/cart.html",
            controller: [ '$scope' , '$state' ,  'CartService' , 'ProductService' , function ($scope, $state , CartService , ProductService){

                $scope.cart = CartService.getCart();
                $scope.cartForView =  $scope.cart.map( p => ({...p}) );

                $scope.cartTotal = 0;
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
                
                $scope.amountChanged = ( product, amount ) => {
                    if( isNaN(+amount) || +amount <= 0 ){
                        product.amount = 1;
                        CartService.changeProductAmount( product.ProductID , 1);
                    } else {
                        CartService.changeProductAmount( product.ProductID , amount);
                    }
                    $scope.reloadCartTotal();
                };

                $scope.removeFromCart = (id) => {
                    CartService.removeProcuct(id);
                    const productIndex = $scope.cartForView.findIndex( p => +p.ProductID === +id );

                    $scope.cartForView.splice(productIndex , 1);
                    $scope.reloadCartTotal();
                };

                $scope.reloadCartTotal = () => {
                    $scope.cartTotal = $scope.cart.map( p => p.ProductPrice * p.amount ).reduce( (acc , current) => acc + current , 0 );
                    $scope.cartTotalItemsAmount =  $scope.cart.length;
                };

                $scope.gotoCheckout = () => {
                    $state.go('checkout');
                }

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
