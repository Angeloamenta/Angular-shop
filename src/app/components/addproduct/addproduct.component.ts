import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop/shop.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  constructor(private shop: ShopService, private http: HttpClient) { }
  

addNewProduct:any = FormGroup


  ngOnInit() {

    this.addNewProduct = new FormGroup({
    name: new FormControl(),
    quantity: new FormControl(),
    imagelink: new FormControl()
    
  });
  
  }

  addProduct(id:number,productName: string, quantity: number, image: string) {

      const url = `http://localhost:8089/product/shop/${id}`;

      const headers = new HttpHeaders({
        'accept': '*/*',
        'Content-Type': 'application/json'
      });
    
      const productData = {

        "name": productName,
        "quantity": quantity,
        "imageLink": image,
      }


    this.http.post(url, productData, { headers: headers }).subscribe((response) => {
        console.log(productData);
        
        console.log('Response:', response);
      });
    window.location.reload();
  }
  
  addOneProduct() {
    const id = this.shop.id 
    const name = this.addNewProduct.value.name
    const quantity = this.addNewProduct.value.quantity
    const image = this.addNewProduct.value.imagelink
    this.addProduct(id, name, quantity, image)
    console.log("image", image);
    
  }
}

// delete
      // this.shop.deleteShop(1).subscribe(
      //   (response) => {
      //     console.log('Shop deleted:', response);
      //     // Aggiorna l'interfaccia o gestisci la risposta in base alle tue esigenze
      //   },
      //   (error) => {
      //     console.error('Error deleting shop:', error);
      //     // Gestisci l'errore in base alle tue esigenze
      //   }
      // );