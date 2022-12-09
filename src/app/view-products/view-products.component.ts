import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent {
  
  constructor(private api:ApiService){
    api.fetchProducts().subscribe(
      (response:any)=>{
        this.products = response;
      }
    )
  }
products:any = []
}
