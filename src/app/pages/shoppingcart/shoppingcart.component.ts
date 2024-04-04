import { Component } from '@angular/core';
import { SupabaseService } from '../../service/supabase.service';
import { CarttService } from '../../service/cartt.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrl: './shoppingcart.component.css',
})
export class ShoppingcartComponent {
  // products:any[]=[];
  totalprice: number = 0;
  constructor(private api: SupabaseService, private cart: CarttService) {
    // this.getproducts();
    // this.total();
  }

  getproducts() {
    // this.products= this.cart.cart;
    return this.cart.cart;
  }

  total() {
    return this.cart.totalprice();
  }

  removeprd(prd: any) {
    // this.products=this.cart.removeitem(prd);
    this.cart.removeitem(prd);
    this.totalprice = this.cart.total;
  }

  clearcart() {
    this.totalprice = 0;
    this.cart.clearcart();
  }
}
