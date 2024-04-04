import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../service/supabase.service';
import { CarttService } from '../../service/cartt.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  catlist:any=[]
  
constructor(private apiservice:SupabaseService,private cart:CarttService){
  
}
  ngOnInit(): void {
    this.getallcat()
    // this.getallprd()
  }

  getallcat(){
   this.apiservice.getallcategory().subscribe((res)=>{
    this.catlist=res;
   })
  }

  totalprice(){
    return this.cart.totalprice()
  }

  getnumber(){
  return  this.cart.cont;
  }

  getallprd(){
   return this.cart.cart
  }

  removeprd(prd:any){
    this.cart.removeitem(prd)
  }

  cont(){
    return this.cart.cont
  }
}
