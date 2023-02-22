import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  name: string;
  price: string ;
  /**
   *
   */
  constructor(private activatedRoute: ActivatedRoute, private router:Router) {
 
  }
  ngOnInit(): void {
   this.name= this.activatedRoute.snapshot.paramMap.get('name')|| '';
   this.price= this.activatedRoute.snapshot.paramMap.get('totalPrice')|| '';
  }
  returnUrl(){
    window.localStorage.removeItem('cart')
  this.router.navigate(['']);
  }

}
