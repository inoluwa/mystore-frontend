import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
   @Output() eventAdd:  EventEmitter<CartProduct>=new EventEmitter<CartProduct>();
   items=  Array(10).fill(0).map((x,i)=>i+1)
    cart:number;
    constructor(private cartProductService:CartProductService){}
 
    
    ngOnInit():void{
      this.product.orderCount=1;
    }
   

    addToCart(f:NgForm) {
      const cart =f.value.cart
      let  cartProduct:CartProduct={...this.product, orderCount:cart}
      this.eventAdd.emit(cartProduct);

    }


    }

