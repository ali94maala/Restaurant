import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderItemsComponent } from './componants/order-items/order-items.component';
import {HttpClientModule} from "@angular/common/http";
import { CategoryItemsComponent } from './componants/category-items/category-items.component';
import {RouterModule , Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DropdownMenuComponent } from './componants/dropdown-menu/dropdown-menu.component';
import { SearchOrderComponent } from './componants/search-order/search-order.component';
import { OrderDetailsComponent } from './componants/order-details/order-details.component';



const routes:Routes =[

  // http://localhost:4200/category/id
  {path: 'category/:id', component:OrderItemsComponent},
  // http://localhost:4200/category
  {path: 'category', component:OrderItemsComponent},
  // http://localhost:4200/orders
  {path: 'orders', component:OrderItemsComponent},
  // http://localhost:4200/order/key
  {path: 'orders/:key', component:OrderItemsComponent},
  // http://localhost:4200
  {path: '',redirectTo : '/orders' , pathMatch:'full'},
  // http://localhost:4200/category/id
  {path: '**', redirectTo : '/orders' , pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    OrderItemsComponent,
    CategoryItemsComponent,
    DropdownMenuComponent,
    SearchOrderComponent,
    OrderDetailsComponent
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
