import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopsComponent } from './components/shops/shops.component';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { AddShopComponent } from './components/add-shop/add-shop.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';

const routes: Routes = [
  {path: "" , component:HomeComponent},
  { path: "shops", component: ShopsComponent },
  {path: 'shop/:id',component: ShopsComponent},
  { path: "login", component: LoginComponent },
  { path: "addshop", component: AddShopComponent },
  {path: "addproduct" , component:AddproductComponent},
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
