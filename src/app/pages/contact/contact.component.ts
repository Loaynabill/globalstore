import { Component } from '@angular/core';
import { SupabaseService } from '../../service/supabase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
constructor(private api:SupabaseService){
  
}



sendmsg(data:any){
 this.api.insertmessage(data).subscribe((res=>{
  console.log(res);
  Swal.fire('Your message has been sent successfully');
 }));
 
}
}
