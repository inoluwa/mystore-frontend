import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CartProduct } from 'src/app/model/cart-product';
import { Product } from 'src/app/model/product';
import { CartProductService } from 'src/app/services/cart-product.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
  export class ProductItemComponent implements OnInit {
   @Input() product: any;
  items=[1,2,3,4,5,6,7,8,9,10]
  @ViewChild('f') form: any;
    cart:number;
    constructor(private cartProductService:CartProductService){}
    
    ngOnInit():void{
    
    }
    onSubmit(f:any){
  const product=   this.product;
  const cart =f.value.cart



    }

    addToCart( f:any) {
      const cart =f.value.cart
      let  cartProduct:CartProduct={...this.product, orderCount:cart}
      
      this.cartProductService.addProductToCart(cartProduct)
      window.alert('Your product has been added to the cart!');
    }


    }

