import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderItemsComponent } from './componants/order-items/order-items.component';
import {HttpClientModule} from "@angular/common/http";
import { CategoryItemsComponent } from './componants/category-items/category-items.component';
import {RouterModule , Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



const routes:Routes =[

  {path: 'category/:id', component:OrderItemsComponent},
  {path: 'category', component:OrderItemsComponent},
  {path: 'orders', component:OrderItemsComponent},
  {path: '',redirectTo : '/orders' , pathMatch:'full'},
  {path: '**', redirectTo : '/orders' , pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    OrderItemsComponent,
    CategoryItemsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,
    CommonModule
    ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
