import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ShopsComponent } from './components/shops/shops.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorInterceptor } from './interceptor/interceptor.interceptor';
import { AddShopComponent } from './components/add-shop/add-shop.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    ShopsComponent,
    AddShopComponent,
    AddproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
