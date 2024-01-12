import { Component,OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop/shop.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private shop: ShopService, private http: HttpClient, private route: ActivatedRoute) { }

  idProduct: any
  products: any
  idShop: any
  viewProduct = true
  
  ngOnInit() {

    this.idShop = this.shop.id

    this.http.get(`http://localhost:8089/product/all-by-shop-id/${this.idShop}`).subscribe((response) => {
      console.log("shopcont", response);
      this.products = response
         
    })


    this.route.snapshot.paramMap.get('id')
    console.log(this.route.snapshot.paramMap.get('id'));

    if (this.route.snapshot.paramMap.get('id')) {
      this.viewProduct = true;
      this.shop.id = this.route.snapshot.paramMap.get('id')

    } else {
      this.viewProduct = false;
    }
    
    
  }

  

  

  checkId(index: any) {
    console.log("id prodotto",this.products[index].id);
    console.log("index", index);
    this.shop.idProduct = this.products[index].id
    console.log("idproducts",this.shop.idProduct);
    
    
   }
  
  
   
  
}
