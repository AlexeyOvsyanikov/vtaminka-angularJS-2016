"use strict";

export default class ProductService{

    constructor(
        $http ,
        CartService,
        HOST ,
        GET_PRODUCTS
    ){

        this._$http = $http;
        this.CartService = CartService;
        this._HOST = HOST;
        this._GET_PRODUCTS = GET_PRODUCTS;
    }

    async getProducts(){

        let response = await this._$http.get( `/${this._GET_PRODUCTS}` );

        let products = response.data;

        products.forEach( p => {
            p.amount = 1;
            p.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis erat sit amet enim auctor feugiat.  Aenean nec ultricies enim. Vestibulum ut viverra orci. Maecenas suscipit odio quis felis varius mollis.  Aenean nec ultricies enim. Vestibulum ut viverra orci. Maecenas suscipit odio quis felis varius mollis. ';
            p.isInCart = this.CartService.isInCart( p.ProductID );
        } );

        return products;

    }

    async getProduct(id){

        let products = await this.getProducts(id);

        const product = products.find( p => +p.ProductID === +id );

        return product;

    }

}