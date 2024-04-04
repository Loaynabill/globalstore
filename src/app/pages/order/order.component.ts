import { Component } from '@angular/core';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
orderlist:any[]=[]
constructor(private order:OrderService){
this.allorder()
this.getallorder();
}

allorder(){
this.orderlist=this.order.getorder()

}


getallorder(){
  this.orderlist=JSON.parse(localStorage.getItem('order')!)
}
}