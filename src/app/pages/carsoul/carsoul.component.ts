import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carsoul',
  templateUrl: './carsoul.component.html',
  styleUrl: './carsoul.component.css'
  
})
export class CarsoulComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}

