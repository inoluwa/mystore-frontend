import { Injectable } from '@angular/core';
import { CartProduct } from '../model/cart-product';


@Injectable({
  providedIn: 'root'
})
export class CartProductService {
storageSpace = window.localStorage;
 
  constructor() { }

  addProductToCart(product: CartProduct[]): void{
    this.storageSpace.setItem('cart', JSON.stringify(product));
  }

  getCartProduct(): CartProduct[] | []{
    const cartProduct = this.storageSpace.getItem('cart')
    return cartProduct? JSON.parse(cartProduct): [];
  }

  clearCart(): void {
    this.storageSpace.clear();
  }
}
