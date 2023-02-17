import { Injectable } from '@angular/core';
import { CartProduct } from '../model/cart-product';


@Injectable({
  providedIn: 'root'
})
export class CartProductService {
storageSpace = window.localStorage;
 
  constructor() { }

  addProduct(product: CartProduct[]): void{
    this.storageSpace.setItem('cart', JSON.stringify(product));
  }

  getProduct(): CartProduct[] | []{
    const cartProduct = this.storageSpace.getItem('cart')
    return cartProduct? JSON.parse(cartProduct): [];
  }

  clearCart(): void {
    this.storageSpace.clear();
  }
}
