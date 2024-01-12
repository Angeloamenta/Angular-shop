
import { Component,OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop/shop.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent {

constructor(private shop:ShopService, private http:HttpClient, private route: ActivatedRoute){}

  id: any
  products: any
  oneProduct:any[] = [];
  
  ngOnInit() {

     this.route.snapshot.paramMap.get('idproduct')
  
    this.shop.idProduct = this.route.snapshot.paramMap.get('idproduct')
    

    this.http.get(`http://localhost:8089/product/${this.shop.idProduct}`).subscribe((response) => {
      console.log("shopcont", response);
      this.oneProduct.push(response);

    })


    
  }
  
}
