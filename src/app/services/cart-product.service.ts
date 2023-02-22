import { Injectable } from '@angular/core';
import { CartProduct } from '../model/cart-product';


@Injectable({
  providedIn: 'root'
})
export class CartProductService {
storageSpace = window.localStorage;
item: CartProduct[]=[]
 
  constructor() { }

  addProductToCart(product: CartProduct): void{
    const products = this.getProduct();


    const arrayProduct:CartProduct[]=[];
    if(products!=null){
      const checkProduct=products.findIndex(x=>x.id==product.id);
      if(checkProduct>-1){
        products[checkProduct]=product;
        products.forEach(x=>{arrayProduct.push(x);
        })

      }
      else{
        products.forEach(x=>{
          arrayProduct.push(x);
        })
        arrayProduct.push(product);

}
const saveRecord=JSON.stringify(arrayProduct);
this.storageSpace.setItem('cart',saveRecord)

    }else{
     
      this.setNewProduct(product)
    }


  
  }
setNewProduct(product: CartProduct){
  const prod=JSON.stringify([product]);
  this.storageSpace.setItem('cart', prod)
}
  getProduct(): CartProduct[] | null{
    const cartProduct = this.storageSpace.getItem('cart')
    return cartProduct? JSON.parse(cartProduct): null;
  }
removeProduct(product: CartProduct){
let allProducts=this.getProduct();
const arrayProduct:CartProduct[]=[];
if(allProducts!=null){

  let newProducts=allProducts.filter(x=>x.id!=product.id);
  newProducts.forEach(x=>{arrayProduct.push(x)});
  const saveRecord=JSON.stringify(arrayProduct);
this.storageSpace.setItem('cart',saveRecord)
}

}
updateProduct(product: CartProduct){
  let allProducts=this.getProduct();
  const arrayProduct:CartProduct[]=[];
  if(allProducts!=null){
  
    let newProducts=allProducts.filter(x=>x.id!=product.id);
    newProducts.forEach(x=>{arrayProduct.push(x)});
    const saveRecord=JSON.stringify(arrayProduct);
  this.storageSpace.setItem('cart',saveRecord)
  }
  
  }
  clearCart(): void {
    this.storageSpace.clear();
  }
}
