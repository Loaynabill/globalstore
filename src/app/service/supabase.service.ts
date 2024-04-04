import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { Observable } from 'rxjs';
import { CarttService } from './cartt.service';
@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
 
  headererr = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set(
      'apikey',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoZGxxeG5ncXpydXV6dWl5c25lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1NzA1NjQsImV4cCI6MjAyNTE0NjU2NH0.uZtMnDqPlhQFU2OauXyXq2ZdDWhX6Cl243wPTrq8ZV0'
    );

    headerepost = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set(
      'apikey',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoZGxxeG5ncXpydXV6dWl5c25lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1NzA1NjQsImV4cCI6MjAyNTE0NjU2NH0.uZtMnDqPlhQFU2OauXyXq2ZdDWhX6Cl243wPTrq8ZV0'
    ).set('Prefer','return=minimal')
    
  
  constructor(private api: HttpClient,private cart:CarttService) {}

  getallcategory(): Observable<any> {
    return this.api.get<any>(
      `https://zhdlqxngqzruuzuiysne.supabase.co/rest/v1/category?select=*`,
      { headers: this.headererr }
    );
  }

  getproductbycatid(catid: number): Observable<any> {
    return this.api.get<any>(
      `https://zhdlqxngqzruuzuiysne.supabase.co/rest/v1/products?categoryid=eq.${catid}&select=*`,
      { headers: this.headererr }
    );
  }

  getproductbtid(id: number): Observable<any> {
    return this.api.get<any>(
      `https://zhdlqxngqzruuzuiysne.supabase.co/rest/v1/products?id=eq.${id}&select=*`,
      { headers: this.headererr }
    );
  }

  insertmessage(message:any) :Observable<any>{
   return this.api.post<any>('https://zhdlqxngqzruuzuiysne.supabase.co/rest/v1/message' , message,  { headers: this.headerepost })
  }

  // searchproduct(name:string):Observable<any>{
  //   return this.api.get<any>(`https://zhdlqxngqzruuzuiysne.supabase.co/rest/v1/products?title=eq.${name}&select=*`,{ headers: this.headerepost })
  // }

  update(prd:any):Observable<any>{
    
    return this.api.put<any>(`https://zhdlqxngqzruuzuiysne.supabase.co/rest/v1/products?id=eq.${prd.id}`, { id:prd.id , amount:prd.amount-prd.quantityofuser}, { headers: this.headerepost } );
    
  }



  insertorder(data:any,prd:any):Observable<any>{

  return  this.api.post<any>(`https://zhdlqxngqzruuzuiysne.supabase.co/rest/v1/order`,{...data,prdname:prd.title,prdsize:prd.size,amount:prd.quantityofuser,totalprice:prd.totalprice}, { headers: this.headerepost })
  }
}
