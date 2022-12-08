import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addProducts= (dataToSend:any) => {
    return this.http.post("http://localhost:8080/addProducts",dataToSend)
  }
  searchProducts= (dataToSend:any) => {
    return this.http.post("http://localhost:8080/searchProducts",dataToSend)
  }
  fetchProducts = () =>{
    return this.http.get("http://localhost:8080/viewProducts")
  }
  userReg= (dataToSend:any) => {
    return this.http.post("http://localhost:8080/userReg",dataToSend)
  }
  Authentication= (dataToSend:any) => {
    return this.http.post("http://localhost:8080/authentication",dataToSend)
  }
}
