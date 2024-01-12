import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShopService } from 'src/app/services/shop/shop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleshop',
  templateUrl: './singleshop.component.html',
  styleUrls: ['./singleshop.component.css']
})
export class SingleshopComponent {

  constructor(private http: HttpClient, private shop: ShopService, private route: ActivatedRoute) { }

  oneShop:any[] = [];
 editshoppopup = false

  ngOnInit() {
    

      this.http.get(`http://localhost:8089/shop/${this.shop.id}`).subscribe((response:any) => {
        console.log("single shop ", response);
        console.log(this.oneShop);
        
        this.oneShop.push(response);
      })
  }

  editShop() {
    this.editshoppopup = !this.editshoppopup
  }

}
