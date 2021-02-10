"use strict";

export default class NewsService {

    constructor(
        $http ,
        GET_NEWS
    ){

        this._$http = $http;
        this._GET_NEWS = GET_NEWS;
    }

    async getNews() {

        let response = await this._$http.get( `/${this._GET_NEWS}` );

        let news = response.data;

        return news;
    }

    async getNewsById( id ){
        let news = await this.getNews() || [];

        return news.find( n => +id === +n.id );
    }
}