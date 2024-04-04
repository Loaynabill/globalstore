import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { countries } from 'countries-list';
import { SupabaseService } from '../../service/supabase.service';
import { CarttService } from '../../service/cartt.service';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  order: FormGroup;

  total: number = 0;
  countriesList: { code: string; name: string }[] = [];

  idprd: number = 0;
  prd: any;
  constructor(
    private fB: FormBuilder,
    private api: SupabaseService,
    private cart: CarttService,
    private myorder:OrderService
  ) {
    
    this.order = this.fB.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Zs]+$')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Zs]+$')]],
      // country: fB.group({
      selectcounty: ['', [Validators.required]],
      // }),
      // adress: fB.group({
      //   streetname: ['', [Validators.required]],
      //   housenum: ['', [Validators.required]],
      //   unit: ['', [Validators.required]],
      // }),
      streetname: ['', [Validators.required]],
      housenum: ['', [Validators.required]],
      unit: ['', [Validators.required]],
      city: ['', [Validators.required]],
      postcode: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      phone: [
        '',
        [Validators.required, Validators.pattern('^01[0-2]{1}[0-9]{8}$')],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ],
      ],
      textarea: [''],
    });

    this.countriesList = Object.keys(countries).map((key) => ({
      code: key,
      name: countries[key as keyof typeof countries].name,
    }));
  }

  get firstname() {
    return this.order.get('firstname');
  }

  get lastname() {
    return this.order.get('lastname');
  }

  // get selectcounty(){
  //   return this.order.get('country.selectcounty')
  // }

  get selectcounty() {
    return this.order.get('selectcounty');
  }

  get city() {
    return this.order.get('city');
  }

  // get housenum(){
  //   return  this.order.get('adress.housenum')
  // }

  // get unit(){
  //   return  this.order.get('adress.unit')
  // }

  // get streetname(){
  //   return  this.order.get('adress.streetname')
  // }

  get housenum() {
    return this.order.get('housenum');
  }

  get unit() {
    return this.order.get('unit');
  }

  get streetname() {
    return this.order.get('streetname');
  }

  get postcode() {
    return this.order.get('postcode');
  }

  get phonee() {
    return this.order.get('phone');
  }

  get email() {
    return this.order.get('email');
  }

  sendform(value: any) {
   this.myorder.myorder=this.cart.cart
    let local=JSON.parse(localStorage.getItem('order')!)
    if (local) {
      localStorage.setItem('order',JSON.stringify([...local,...this.myorder.myorder])) 
    } else {
      localStorage.setItem('order',JSON.stringify(this.cart.cart))
    }


    this.cart.cart.map((prd) => {
      this.api.update(prd).subscribe((res) => {
        console.log(res);
      });
    });

    this.cart.cart.map((prd) => {
      this.api.insertorder(value, prd).subscribe((res) => {
        console.log(res);
      });
    });

    Swal.fire('The order has been sent successfully');
    this.cart.clearcart();
    this.order.reset()
  
  }

  getcart() {
    return this.cart.cart;
  }

  gettotalprice() {
    return this.cart.totalprice();
  }
}
