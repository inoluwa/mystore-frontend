import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/model/product';
import { CartProduct } from 'src/app/model/cart-product';
import { CartProductService } from 'src/app/services/cart-product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productItem: Product[]=[];

  constructor(private productService:ProductService, private cartProductService: CartProductService ){}

  ngOnInit(): void {
    this.productService.getProduct().subscribe(res => {
      this.productItem = res;
    })
  }
  addProductToCart(cartProduct:CartProduct){
    this.cartProductService.addProductToCart(cartProduct)
    window.alert('Your product has been added to the cart! '+cartProduct.name);
  }
}
