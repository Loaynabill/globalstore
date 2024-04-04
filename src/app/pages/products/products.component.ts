import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { SupabaseService } from '../../service/supabase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productlist: any[] = [];
  deafultlist:any=[];
  catid: number = 0;
  catname: string | null = '';
  searchlist: any = [];
selectsort: any;

  constructor(
    private apii: SupabaseService,
    private activeservice: ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {
    this.activeservice.paramMap.subscribe((res) => {
      this.catid = Number(res.get('id'));
      this.getproducts();
    });
    this.activeservice.paramMap.subscribe((res) => {
      this.catname = res.get('namecat');
    });
    this.getproducts()
    // localStorage.clear()
  }

  getproducts() {
    this.apii.getproductbycatid(this.catid).subscribe((res) => {
      this.deafultlist=[...res];
      this.productlist = res;
      this.searchlist=[...res]

    });
  }

  search(name: any) {
    if(name==""){
     this.productlist=[...this.searchlist]
    }else {
   this.productlist= this.productlist.filter((prd)=>{
    return prd.title.toLowerCase().includes(name.toLowerCase())
   });}

   console.log(this.searchlist)
    
  }
   
  sortt(value:any){
    if (value==1) {
      this.productlist.sort((a:any, b:any) => b.price - a.price);
    } else if(value==2) {
      this.productlist.sort((a:any, b:any) => a.price - b.price);
    }else {
      this.productlist=[...this.deafultlist];
    }
  
  }
}
