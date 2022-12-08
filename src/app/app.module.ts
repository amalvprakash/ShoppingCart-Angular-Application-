import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { SearchProductsComponent } from './search-products/search-products.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';

const myRoute:Routes = [
  {
    path:"",
    component:AdminLoginComponent
  },
 
  {
    path:"navbar",
    component:NavbarComponent
  },
  {
    path:"adminHome",
    component:AdminHomeComponent
  },
  {
    path:"adminHome",
    component:AdminHomeComponent
  },
  {
    path:"viewProducts",
    component:ViewProductsComponent
  },
  {
    path:"addProducts",
    component:AddProductsComponent
  },
  {
    path:"searchProducts",
    component:SearchProductsComponent
  },
  {
    path:"userReg",
    component:UserRegComponent
  },
  {
    path:"userLogin",
    component:UserloginComponent
  },
  {
    path:"userHome",
    component:UserHomeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    NavbarComponent,
    AdminHomeComponent,
    AddProductsComponent,
    ViewProductsComponent,
    SearchProductsComponent,
    UserRegComponent,
    UserloginComponent,
    UserHomeComponent,
    UsernavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
