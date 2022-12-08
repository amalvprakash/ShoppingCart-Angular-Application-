import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  name =""
  

  constructor(private api:ApiService){
    api.fetchProducts().subscribe(
      (response:any)=>{
        this.products = response;
      }
    )
  }
products:any = []
  
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
  searchData:any =[]
  
}
