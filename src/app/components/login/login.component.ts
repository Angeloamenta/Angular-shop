import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShopService } from 'src/app/services/shop/shop.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient, private shop: ShopService) { }

  loginUrl = 'http://localhost:8089/authenticate';
  
name:any
password:any
email:any

  onLogin() {

    console.log(this.name);
    
    this.shop.loginUser(this.name, this.password, this.email)
  }


}
