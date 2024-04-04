import { Component, OnInit, TemplateRef } from '@angular/core';
import { SupabaseService } from '../../service/supabase.service';
import { ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, NgIfContext } from '@angular/common';
import Swal from 'sweetalert2';
import { CarttService } from '../../service/cartt.service';

@Component({
  selector: 'app-productdeatil',
  templateUrl: './productdeatil.component.html',
  styleUrl: './productdeatil.component.css',
})
export class ProductdeatilComponent implements OnInit {
  local: string[] = [];
  valuesize: string = '';
  productid: number = 0;
  product: any;
  images: string[] = [];

  constructor(
    private api: SupabaseService,
    private active: ActivatedRoute,
    private location: Location,
    private cart: CarttService
  ) {}
  ngOnInit(): void {
    this.productid = Number(this.active.snapshot.paramMap.get('idd'));
    this.getproductdeatil();
  }

  getproductdeatil() {
    this.api.getproductbtid(this.productid).subscribe((res) => {
      this.product = res[0];
      this.images = [
        this.product.posterimg,
        this.product.imgdeatil1,
        this.product.imgdetila2,
      ];
    });
  }

  goback() {
    this.location.back();
  }

  sizevalue(size: string) {
    this.valuesize = size;
  }

  add(prd: any, amount: number, size: string) {
    if (this.cart.cart.length > 0) {
      let list = this.cart.cart.filter((pprd) => {
        return prd.id == pprd.id;
      });
      let comparenum = list.reduce(
        (compare, pprd) => (compare += pprd.quantityofuser),
        0
      );
      if (prd.amount >= +comparenum + amount) {
        this.cart.addProductToCart(prd, size, +amount);
        Swal.fire('product is added to cart');
      } else {
        Swal.fire('the quantity is bigger than stock');
      }
    } else {
      this.cart.addProductToCart(prd, size, +amount);
      Swal.fire('product is added to cart');
    }
  }


}
