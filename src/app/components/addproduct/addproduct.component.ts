import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop/shop.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  constructor(private shop: ShopService) { }
  
  ngOnInit() {
  
     this.shop.addProduct(1, "prodotto1", 1, "stringa", 0, "string", "string")
    

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
  }
}
