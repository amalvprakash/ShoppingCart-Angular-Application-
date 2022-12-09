import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent {
  name =""
  address =""
  phone =""
  emailId =""
  username =""
  password =""
  confirm =""
  constructor(private api:ApiService){}
  readValues =() =>{
    let data:any ={
     
      "name":this.name,
      "address":this.address, 
      "phone":this.phone ,
      "emailId":this.emailId, 
      "username":this.username, 
      "password":this.password,
      "confirm":this.confirm 
     
    }
    if (this.password == this.confirm) {
      this.api.userReg(data).subscribe(
        (response:any) => {
          console.log(response)
          if (response.status == "success") {
            this.name =""
            this.address =""
            this.phone =""
            this.emailId =""
            this.username =""
            this.password =""
            this.confirm=""
           
          } else {
            alert("Something went wrong!!!")
          }
        }
      )
    } else {
      alert("Passwords Didn't Match!!!\ntry again!")
      this.password = ""
      this.confirm = ""
    }
    
    }
}
