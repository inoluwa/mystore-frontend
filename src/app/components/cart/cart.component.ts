import { Component, OnInit } from '@angular/core';
import { CartProductService } from 'src/app/services/cart-product.service';
import { CartProduct, CustomerInformation } from 'src/app/model/cart-product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  products:CartProduct[]=[]
  totalPrice:number=0

  info:CustomerInformation={
    address:'',
    fullname:'',
    cardnumber:''
  };
 constructor( private cartProductService:CartProductService, private router:Router){}


 ngOnInit(){
  this.products= this.cartProductService.getProduct()|| [];
  
this.calculateTotal()

 }

 checkValue(amt:number, prod:CartProduct){
  prod.orderCount=amt;
if(amt<1){
  this.cartProductService.removeProduct(prod);
  window.alert(`You have removed ${prod.name} from the carts` );
  this.products= this.cartProductService.getProduct()|| [];
}else{
  this.cartProductService.addProductToCart(prod);
}

this.calculateTotal()
 }
 calculateTotal() {
  this.products= this.cartProductService.getProduct()|| [];
  let total=0;
this.products.forEach(x=>{
  
  total+=  x.orderCount*x.price;
});
this.totalPrice=total

 }
 onSubmit(){
  const obj={name:this.info.fullname,
  totalPrice:this.totalPrice}
  this.router.navigate(['/success',obj]);
 }

}
