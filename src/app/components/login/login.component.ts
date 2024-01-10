import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShopService } from 'src/app/services/shop/shop.service';
import { FormsModule } from '@angular/forms';
import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient, private shop: ShopService, private router:Router) { }


  loginUrl = 'http://localhost:8089/authenticate';
  passToken: any;
  badlogin = false
  
name:any
password:any
email: any
  

   loginUser(name: string, password: string, email: string) {

    const headersLogin = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': '*/*'
    });

    const body = {
      username: name,
      password: password,
      email: email
    }

     this.http.post(this.loginUrl, body, { headers: headersLogin }).subscribe((data) => {
    this.passToken = data;
       localStorage.setItem('jwttoken', this.passToken.jwttoken);
       this.badlogin = false
       this.router.navigateByUrl("/");
     },
       (error) => {
      // Gestione dell'errore qui
      console.error('Si è verificato un errore durante il login:', error);
         // Esempio: mostra un messaggio all'utente o esegui un'altra azione per gestire l'errore.
         this.badlogin = true
    }
     )
  }

   onLogin() {

     console.log(this.name);
    
     this.loginUser(this.name, this.password, this.email)
   }


}
