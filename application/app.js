"use strict";

import angular from 'angular';
import AngularRouteModule from 'angular-route';
import LoadingbarModule from 'angular-loading-bar';
import LocalStorageModule from 'angular-local-storage';
import UIRouterModule from '@uirouter/angularjs';
import AngularTranslateModule from 'angular-translate';
import AngularTranslateStaticFilesModule from 'angular-translate-loader-static-files';

import MainController from './controllers/MainController';


import LocaleService from './services/LocaleService';
import ProductService from './services/ProductService';
import CartService from './services/CartService';
import NewsService from './services/NewsService';

import LangsOptionDirective from './directives/LangsOptionDirective';
import ProductDirective from './directives/ProductDirective';

import HOME_STATE from './states/home.state';
import PRODUCT_STATE from './states/product.state';
import CART_STATE from './states/cart.state';
import CHECKOUT_STATE from './states/checkout.state';
import NEWS_STATE from './states/news.state';
import ARTICLE_STATE from './states/article.state';

angular.module('VtaminkaApplication.controllers' , []);
angular.module('VtaminkaApplication.services' , []);
angular.module('VtaminkaApplication.filters' , []);
angular.module('VtaminkaApplication.directives' , []);
angular.module('VtaminkaApplication.constants' , []);


angular.module('VtaminkaApplication.controllers')
    .controller( 'MainController' , [ '$scope' , 'LocaleService' , '$translate', MainController ]);

angular.module('VtaminkaApplication.constants')
       .constant('HOST' , 'http://localhost:9000/public');

angular.module('VtaminkaApplication.constants')
    .constant('GET_LANGS' , 'i18n/langs.json');

angular.module('VtaminkaApplication.constants')
    .constant('GET_PRODUCTS' , 'data/products-list.json');

angular.module('VtaminkaApplication.constants')
.constant('GET_NEWS' , 'data/news-list.json');

angular.module('VtaminkaApplication.constants')
    .constant('GET_TRANSLATIONS' , 'i18n/{{LANG}}.json');

angular.module('VtaminkaApplication.services')
    .service('LocaleService' , [ '$http', 'HOST' , 'GET_LANGS' , 'GET_TRANSLATIONS' , LocaleService ]);

angular.module('VtaminkaApplication.services')
    .service('ProductService' , [ '$http' , 'CartService' , 'HOST' , 'GET_PRODUCTS' , ProductService ]);

angular.module('VtaminkaApplication.services')
    .service('CartService' , [ 'localStorageService' , CartService ]);

    angular.module('VtaminkaApplication.services')
    .service('NewsService' , [ '$http' , 'GET_NEWS' , NewsService ]);

angular.module('VtaminkaApplication.directives')
    .directive('langsOptionDirective' , [ LangsOptionDirective ]);

angular.module('VtaminkaApplication.directives')
    .directive('productDirective' , [ ProductDirective ]);


let app = angular.module('VtaminkaApplication',[
    LoadingbarModule,
    LocalStorageModule,
    AngularRouteModule,
    UIRouterModule,
    AngularTranslateModule,
    AngularTranslateStaticFilesModule,
    'VtaminkaApplication.controllers',
    'VtaminkaApplication.filters',
    'VtaminkaApplication.services',
    'VtaminkaApplication.directives',
    'VtaminkaApplication.constants',
]);

app.config( [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    'localStorageServiceProvider' ,
    'cfpLoadingBarProvider',
    '$translateProvider',
    ($stateProvider , $urlRouterProvider , $locationProvider , localStorageServiceProvider , cfpLoadingBarProvider , $translateProvider)=>{

    $locationProvider.html5Mode(false).hashPrefix('!')

    $urlRouterProvider.otherwise('/home');

    $translateProvider.useStaticFilesLoader({
        'prefix': 'i18n/',
        'suffix': '.json'
    });

    $translateProvider.preferredLanguage('RU');

    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.includeBar = true;

    localStorageServiceProvider.setStorageCookie( 7 , '/' );
    localStorageServiceProvider.setStorageCookieDomain('localhost');

    $stateProvider.state('home' ,  HOME_STATE);

    $stateProvider.state('product' , PRODUCT_STATE);

    $stateProvider.state('cart' , CART_STATE);

    $stateProvider.state('checkout' , CHECKOUT_STATE);

    $stateProvider.state('news' , NEWS_STATE);

    $stateProvider.state('article' , ARTICLE_STATE);

} ] );

app.run();
