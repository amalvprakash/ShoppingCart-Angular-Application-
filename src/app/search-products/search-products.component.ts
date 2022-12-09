import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent {
  name = ""
  searchData:any =[]

  constructor(private api:ApiService){}
  
  Search = () => {
    let data:any = {
      "name":this.name
    }
    this.api.searchProducts(data).subscribe(
      (response:any)=>{
        if (response.length == 0) {
          alert("No Products found!!!")
        } else {
          this.searchData = response
        }
      }
    )
  }
}
