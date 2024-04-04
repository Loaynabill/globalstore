import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CarsoulComponent } from './pages/carsoul/carsoul.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductdeatilComponent } from './pages/productdeatil/productdeatil.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingcartComponent } from './pages/shoppingcart/shoppingcart.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { OrderComponent } from './pages/order/order.component';
import Swal from 'sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    CarsoulComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    ProductdeatilComponent,
    CheckoutComponent,
    ShoppingcartComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    NgbPopoverModule,
    
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
