import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  username = ""
  password = ""
  constructor(private route:Router, private api:ApiService){}

  login = () =>{
    let data:any ={
      "username":this.username,
      "password":this.password
    }
    console.log(data)
    
    this.api.Authentication(data).subscribe(
      (response:any)=>{
        if (response.length == 0) {
          alert("invalid credentials")
        } else {
          alert("ahgvahvahvahv credentials")

          this.route.navigate(["/userHome"])
        }
      }
    )
  }
    
}
