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
productList:Product[]=[]
productCount:string[]=["1","2","3","4","5","6"]

constructor(private productService:ProductService, private cartProductSeervice:CartProductService){}

ngOnInit(){}
}
