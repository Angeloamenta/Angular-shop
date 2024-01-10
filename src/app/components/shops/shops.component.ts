import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShopService } from 'src/app/services/shop/shop.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent {

  constructor(private http: HttpClient, private shop: ShopService, private route: ActivatedRoute) { }

  
  shops: any
  singleShop:any
  viewShop = true
  id:any
  


  ngOnInit() {
  
    if (this.viewShop == false) {
      this.shops = []
    } else {
      this.http.get(this.shop.shopAll).subscribe((response) => {
        this.shops = response;
        console.log("this shops", this.shops);


      });
    }
    
    

    


    this.route.snapshot.paramMap.get('id')
    console.log(this.route.snapshot.paramMap.get('id'));

    // if (this.route.snapshot.paramMap.get('id')) {

    //    this.viewShop = true
    //   console.log("shop1", this.shops);
      
    //   this.http.get(this.shop.shopAll).subscribe((response:any) => {
    //     this.singleShop = response(parseInt(this.route.snapshot.paramMap.get('id')!))
    //   console.log("this shops", this.shops)

      
    // } else {
    //   this.viewShop = false
    // }

    if (this.route.snapshot.paramMap.get('id')) {
      this.viewShop = true;
      console.log("numero", this.route.snapshot.paramMap.get('id'));
      
      
  const shopId = parseInt(this.route.snapshot.paramMap.get('id')!);

  this.http.get(`${this.shop.urlShop}${shopId}`).subscribe((response: any) => {
    this.singleShop = response;


  });
} else {
  this.viewShop = false;
}
    
 
  }
  
  checkId(index:any) {
    console.log("index", index);
    this.shop.id = index
    console.log("questo id", this.shop.id);
    
  }


  
  patchShop(id:number, pIva:string, shopName:string) {

     const url = `http://localhost:8089/shop/${id}`;

     const headers = new HttpHeaders({
       'accept': '*/*',
       'Content-Type': 'application/json'
     });
    
    const shopData = {
       "piva": pIva,
       "name": shopName      
     };

     this.http.patch(url, shopData, { headers: headers }).subscribe((response) => {
       console.log('Response:', response);
     });
    
    
  }

}
