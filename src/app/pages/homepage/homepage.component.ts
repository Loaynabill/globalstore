import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../service/supabase.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit { 
constructor(private api:SupabaseService){}
  ngOnInit(): void {
    this.getallcategory();
  }
categorylist:any=[]

getallcategory(){
  this.api.getallcategory().subscribe((res:any)=>{
    this.categorylist=res;
  })
}


}
