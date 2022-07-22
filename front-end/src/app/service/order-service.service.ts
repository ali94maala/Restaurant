import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Order} from "../model/order";

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

//this.baseUrl + 'category?id=' == `${this.baseUrl}category?id=${id}`
  private baseUrl = 'http://localhost:8080/api/'
  constructor( private http : HttpClient) { }


  getOrders(page:number,size:number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}allorders?page=${page}&size=${size}`).pipe(
      map(
        response => response
      )
    )
  }

  getOrdersByCategoryId(id: string ,page:number ,size: number): Observable<Order[]> {
    return this.http.get<Order[]>( `${this.baseUrl}category?id=${id}?page=${page}&size=${size}`).pipe(
      map(
        response => response
      )
    )
  }



  getOrdersByKey(word: string,page:number,size:number): Observable<Order[]> {
    return this.http.get<Order[]>( `${this.baseUrl}orderkey?word=${word}?page=${page}&size=${size}`).pipe(
      map(
        response => response
      )
    )
  }

  getOrderById(id: string | null): Observable<Order> {
    return this.http.get<Order>( `${this.baseUrl}order?id=${id}`).pipe(
      map(
        response => response
      )
    )
  }
}
