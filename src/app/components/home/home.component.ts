import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShopService } from 'src/app/services/shop/shop.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private http: HttpClient, private shop: ShopService) { }

  
  shops: any
  


  ngOnInit() {
 
    this.http.get(this.shop.shopAll).subscribe((response) => {
      this.shops = response;
      console.log("this shops", this.shops);

    });

  }
    
    
  }



