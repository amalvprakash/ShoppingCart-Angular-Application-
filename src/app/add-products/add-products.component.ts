import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  name = ""
  image = ""
  catagory = ""
  price = ""
  constructor(private api:ApiService){}
  readValues =() =>{
    let data:any ={
      "name":this.name,
      "image":this.image,
      "catagory":this.catagory,
      "price":this.price,
     
    }
    this.api.addProducts(data).subscribe(
      (response:any) => {
        console.log(response)
        if (response.status == "success") {
          alert("Products Added SuccessFully")
          this.name = ""
          this.image = ""
          this.catagory = ""
          this.price = ""
         
        } else {
          alert("Something went wrong!!!")
        }
      }
    )
  }
}
