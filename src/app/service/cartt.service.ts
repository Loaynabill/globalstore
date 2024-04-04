import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarttService {
  cart: any[] = [];
  cont: number =0;
  total:number=0
  constructor() {}

  addProductToCart(prd: any, size: string, quantity: number) {
    this.cont+=quantity;
    this.cart.push({
      ...prd,
      size: size,
      totalprice: prd.price * quantity,
      quantityofuser: quantity,
    });
  }

  
    
  //  addProductToCart(prd: any,quantity: number) {
  //   this.cont+=quantity;
  //   this.cart.push({
  //     ...prd,
  //   });
  // }

  totalprice() {
    this.total = this.cart.reduce((total, prd) => (total += prd.totalprice), 0);
    return this.total;
  }

  removeitem(product: any) {
    this.total-=product.totalprice;
    this.cont-=product.quantityofuser;
    return this.cart = this.cart.filter((prd) => {
      return prd.id != product.id;
    });
  }

  clearcart() {
    this.total=0;
    this.cont = 0;
    return (this.cart = []);
  }

  
}
