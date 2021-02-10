import footer from './state.parts/footer.part';
import header from './state.parts/header.part';

export default {
    'url': '/news',
    'views':{
        "header":header,
        "content": {
            'templateUrl': "templates/news/news.html",
            controller: [ '$scope' ,  'news' , function ($scope , news ){

                $scope.newsList = news;

            } ]
        },
        "footer": footer
    },
    'resolve': {

        'news': [ 'NewsService' , function ( NewsService ){
            return NewsService.getNews();
        } ],
        'langs': [ 'LocaleService' , function ( LocaleService ){
            return LocaleService.getLangs();
        }  ]

    }
};
