/**
 * Created by edward on 2/17/20.
 */
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {orderUrls} from "../../services/app-http/backendUrlStrings";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor (private http: HttpClient) {
  }

  getOrders(pageUrl = '?page=0&size=20', isPaid = true, deliverCode = 0) {
    return this.http.get(orderUrls.GET_ORDERS_ADMIN + pageUrl + '&isPaid=' + isPaid + '&deliverCode=' + deliverCode);
  }
}
