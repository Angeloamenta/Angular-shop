import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop/shop.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.css']
})
export class AddShopComponent {

  constructor(private http: HttpClient, private shop: ShopService) { }
  
  pivashop: any
  shopname: any
addNewShop:any = FormGroup


  ngOnInit() {
    this.addNewShop = new FormGroup({
    pivashop: new FormControl(),
    shopname: new FormControl()
  });
    

  }

  addShop( pIva:string, shopName:string) {

     const url = 'http://localhost:8089/shop';

     const headers = new HttpHeaders({
       'accept': '*/*',
       'Content-Type': 'application/json'
     });
    
    const shopData = {
      "id": 0,
       "piva": pIva,
       "name": shopName      
     };

     this.http.post(url, shopData, { headers: headers }).subscribe((response) => {
       console.log('Response:', response);
     });
    
    
  }
  
  addOneShop() {
    this.pivashop = this.addNewShop.value.pivashop
    this.shopname = this.addNewShop.value.shopname
    
    this.addShop(this.pivashop, this.shopname)
  };
   

}
