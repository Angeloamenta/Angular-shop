import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop/shop.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.css']
})
export class AddShopComponent {

  constructor(private http: HttpClient, private shop: ShopService) { }
  
  ngOnInit() {
    
    this.shop.addShop(1220,'xgfssedsx','shops','shopp')

  }

}
