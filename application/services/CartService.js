"use strict";


export default class CartService{


    constructor(
        LocalStorageService
    ){
        
        this.LocalStorageService = LocalStorageService;
        this.cart = this.LocalStorageService.get('cart') || [];

        if(this.cart.length === 0){
            this.LocalStorageService.set('cart' , []);
        }
    }

    getCart(){
        return this.cart;
    }

    addProduct( product ){

        if(!this.cart.find( p => +p.ProductID === product.ProductID)){
            this.cart.push( {
                ProductID: product.ProductID,
                amount: product.amount,
                ProductPrice: product.ProductPrice
            } );
            this.LocalStorageService.set('cart' , this.cart);
        }

    }

    removeProcuct( id ){

        const productIndex = this.cart.findIndex( p => +p.ProductID === +id );

        if(productIndex !== -1){
            this.cart.splice( productIndex , 1 );
            this.LocalStorageService.set('cart' , this.cart);
        }

    }

    changeProductAmount( id , amount ){

        const product = this.cart.find( p => +p.ProductID === +id );

        if(product){
            product.amount = amount;
            this.LocalStorageService.set('cart' , this.cart);
        }

    }

    isInCart(id){
        return this.cart.findIndex( p => +p.ProductID === +id ) !== -1;
    }

}