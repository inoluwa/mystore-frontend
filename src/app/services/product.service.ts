import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, Observable, of } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  storageSpace = window.localStorage;
  url = 'http://localhost:4200/assets/data.json';
  product:Observable<Product[]>= of([]);
  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]>{
    this.product=this.http.get<Product[]>(this.url);
    return this.product
  }
 
  // getProductById(id:number):Observable<Product> {
  //   let product=this.product.pipe(map(x=>x.find(x=>x.id==id)));
  //   return product;
  // }
}
