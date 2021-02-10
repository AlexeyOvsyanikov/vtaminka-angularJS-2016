import footer from './state.parts/footer.part';
import header from './state.parts/header.part';

export default {
    'url': '/home',
    'views':{
        "header":header,
        "content": {
            'templateUrl': "templates/home/home.html",
            controller: [ '$scope' ,  'CartService' , 'products' , function ($scope , CartService , products){

                $scope.products = products;
                $scope.cart = CartService.getCart();

            } ]
        },
        "footer": footer
    },
    'resolve': {

        'products': [ 'ProductService' , function ( ProductService ){
            return ProductService.getProducts();
        } ],
        'langs': [ 'LocaleService' , function ( LocaleService ){
            return LocaleService.getLangs();
        }  ]

    }
};
