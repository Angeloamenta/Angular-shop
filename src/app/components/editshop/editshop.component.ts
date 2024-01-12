
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShopService } from 'src/app/services/shop/shop.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, } from '@angular/forms'

@Component({
  selector: 'app-editshop',
  templateUrl: './editshop.component.html',
  styleUrls: ['./editshop.component.css']
})
export class EditshopComponent {

  constructor(private http: HttpClient, private shop: ShopService, private route: ActivatedRoute) { }
  
  editShopForm: any = FormGroup
  pivashop: any
  shopname: any
  id:any

  ngOnInit() {
    this.id = this.shop.id
    console.log("edit");
    this.editShopForm = new FormGroup({
      pivashop: new FormControl(),
      shopname: new FormControl()
    })
  
  }

  patchShop(id:number, pIva:string, shopName:string) {

     const url = `http://localhost:8089/shop/${id}`;
     const headers = new HttpHeaders({
       'accept': '*/*',
       'Content-Type': 'application/json'
     });
    
    // const shopData = {
    //    "piva": pIva,
    //    "name": shopName      
    // };
    const shopDataEdit = [
      { "op": "replace", "path": "/piva", "value": pIva },
      { "op": "replace", "path": "/name", "value": shopName }
    ]

     this.http.patch(url, shopDataEdit, { headers: headers }).subscribe((response) => {
       console.log('Response:', response);
     });
    
    
  }

   editShop() {
    this.pivashop = this.editShopForm.value.pivashop
    this.shopname = this.editShopForm.value.shopname
    
     this.patchShop(this.id, this.pivashop, this.shopname)
     this.editShopForm.reset()
    window.location.reload();


  };

}
