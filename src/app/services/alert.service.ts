import { Injectable } from '@angular/core';
import { Product } from '../product/product';

// @Injectable({
//   providedIn: 'root' //Bu ifade app.modules'de providers'a eklemekle aynı işi görür servisi global yapar.
// })
@Injectable() //app.modules içerisindeki providers'a bu servisi verdiysen böyle yazabilirsin.
export class AlertService {

  constructor() { }

  addToCartAlert = (productName:string) => {
    alert(`${productName} added to cart`);
  } 
}
