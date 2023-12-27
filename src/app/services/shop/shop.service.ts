import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

shopAll = 'http://localhost:8089/shop/all';
loginUrl = 'http://localhost:8089/authenticate';
passToken: any;
urlShop= 'http://localhost:8089/shop/'


  
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
      console.log("data", data);
      console.log(this.passToken.jwttoken);
      
    localStorage.setItem('jwttoken', this.passToken.jwttoken);
  })
  }


   addShop(id:number, pIva:string, shopName:string, shop:string) {

     const url = 'http://localhost:8089/shop';

     const headers = new HttpHeaders({
       'accept': '*/*',
       'Content-Type': 'application/json'
     });
    
     const shopData = {
       "id": id,
       "piva": pIva,
       "name": shopName      
     };

     this.http.post(url, shopData, { headers: headers }).subscribe((response) => {
       console.log('Response:', response);
     });
    
   }
  
  deleteShop(id:number) {

    const url = `${this.urlShop}${id}`;
     const headers = new HttpHeaders({
       'accept': '*/*',
       'Content-Type': 'application/json'
     });
    console.log(url);
    
     return this.http.delete(url, { headers: headers });

  }
  
  addProduct(productId:number, productName:string, quantity:number, image:string,shopId:number , pIva:string, shopName:string) {

     const url = 'http://localhost:8089/shop/0';

     const headers = new HttpHeaders({
       'accept': '*/*',
       'Content-Type': 'application/json'
     });
    
    const productData = {
      "id": productId,
      "name": productName,
      "quantity": quantity,
      "imageLink": image,
      "shop": {
        "id": shopId,
        "piva": pIva,
        "name": shopName,
        "products": [
          "string"
        ]
      }
    }


     this.http.post(url, productData, { headers: headers }).subscribe((response) => {
       console.log('Response:', response);
     });
    
   }

   }



