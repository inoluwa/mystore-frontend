import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product';
import { filter, Observable } from 'rxjs';
import { CartProductService } from 'src/app/services/cart-product.service';
import { CartProduct } from 'src/app/model/cart-product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {
/**
 *
 */

product: CartProduct;
id: number=0;
items=  Array(10).fill(0).map((x,i)=>i+1)
cart=1;
constructor(private activatedRoute:ActivatedRoute, private productService: ProductService, private cartProductService:CartProductService) {

 
}
  ngOnInit(): void {
   this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
   this.getProductById(this.id);
  }
  getProductById(id: number){
  this.productService.getProduct()
.subscribe((products) => {
 const product =products.find(x=>x.id==id)
 if(product){
  this.product={description: product.description,url:product.url, id:product.id, name:product.name,price:product.price, orderCount:1} 
 }
});
  }



  addToCart() {
 

    let  cartProduct:CartProduct={...this.product, orderCount:this.cart}
    
    this.cartProductService.addProductToCart(cartProduct)
    window.alert('Your product has been added to the cart!');
  }
}
