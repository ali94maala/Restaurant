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

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}allorders`).pipe(
      map(
        response => response
      )
    )
  }

  getOrdersByCategoryId(id: string | null): Observable<Order[]> {
    return this.http.get<Order[]>( `${this.baseUrl}category?id=${id}`).pipe(
      map(
        response => response
      )
    )
  }
}
