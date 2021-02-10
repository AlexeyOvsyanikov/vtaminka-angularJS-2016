import footer from './state.parts/footer.part';
import header from './state.parts/header.part';

export default {
    'url': '/news/:id',
    'views':{
        "header":header,
        "content": {
            'templateUrl': "templates/news/article.html",
            controller: [ '$scope' ,  'article' , function ($scope , article ){
                $scope.article = article;
            } ]
        },
        "footer": footer
    },
    'resolve': {

        'article': [ '$stateParams', 'NewsService', function ( $stateParams , NewsService ){
            return NewsService.getNewsById( $stateParams.id );
        } ],
        'langs': [ 'LocaleService' , function ( LocaleService ){
            return LocaleService.getLangs();
        }  ]

    }
};
