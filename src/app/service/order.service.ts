import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
myorder:any[]=[]
  constructor() { }

getorder() {
  return this.myorder  
}




}
