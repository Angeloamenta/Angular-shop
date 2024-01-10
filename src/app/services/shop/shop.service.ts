import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  OnInit } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

shopAll = 'http://localhost:8089/shop/all';
  urlShop = 'http://localhost:8089/shop/';
  shops: any
  id:any
  

  ngOnInit() {
     this.http.get(this.shopAll).subscribe((response) => {
       this.shops = response;
       console.log("response",response);
       console.log("this.shop", this.shops);
      console.log("this shops", this.shops);

     });
}
  
  
  deleteShop(id:number) {

    const url = `${this.urlShop}${id}`;
     const headers = new HttpHeaders({
       'accept': '*/*',
       'Content-Type': 'application/json'
     });
    console.log("delete", id, url);
    
    return this.http.delete(url, { headers: headers }).subscribe((response) => {
       console.log(response);
       
     });

  }

   patchShop(id:number, pIva:string, shopName:string) {

     const url = `http://localhost:8089/shop/${id}`;

     const headers = new HttpHeaders({
       'accept': '*/*',
       'Content-Type': 'application/json'
     });
    
    const shopData = {
      "id": 0,
       "piva": pIva,
       "name": shopName      
     };

     this.http.patch(url, shopData, { headers: headers }).subscribe((response) => {
       console.log('Response:', response);
     });
    
    
  }
  
  
   }



