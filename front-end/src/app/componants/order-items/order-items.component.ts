import { Component, OnInit } from '@angular/core';
import {OrderServiceService} from "../../service/order-service.service";
import {Order} from "../../model/order";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

 orders :Order[] =[];
 page : number =1;
 pageLength : number = 5;
 orderSize :number = 17 ;

  constructor( private order : OrderServiceService,
               private route : ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      () => {
        this.finishOrders()
      }
    )

  }

  finishOrders(){
    let result1 = this.route.snapshot.paramMap.has('id');
    let result2 = this.route.snapshot.paramMap.has('key');

    if (result1){this.getOrderByCategoryId()}

    else if (result2){this.getAllOrdercontainingKey()}

      else{this.getOrders();}

  }

  getOrders(){
    this.order.getOrders(this.page-1 ,this.pageLength).subscribe(
      data => {this.orders = data}
    )
  }

  getOrderByCategoryId(){
    let idCategory = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.order.getOrdersByCategoryId(idCategory ,this.page-1 ,this.pageLength).subscribe(
      data =>{this.orders=data}
    )
  }

   getAllOrdercontainingKey() {
    let keyword = this.route.snapshot.paramMap.get('key');
     // @ts-ignore
    this.order.getOrdersByKey(keyword ,this.page-1,this.pageLength).subscribe(
      data => {this.orders=data}
    )
  }

  doing(){
    this.finishOrders();
  }
}
