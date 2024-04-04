import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductdeatilComponent } from './pages/productdeatil/productdeatil.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ShoppingcartComponent } from './pages/shoppingcart/shoppingcart.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
{path:'',redirectTo:'/Home',pathMatch:'full'},
{path:'Home',component:HomepageComponent},
{path:'Category/:id/:namecat',component:ProductsComponent},
{path:'Product/:idd',component:ProductdeatilComponent},
{path:'About',component:AboutComponent},
{path:'Checkout',component:CheckoutComponent},
{path:'Cart',component:ShoppingcartComponent},
{path:'Order',component:OrderComponent},
{path:'Contact',component:ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
