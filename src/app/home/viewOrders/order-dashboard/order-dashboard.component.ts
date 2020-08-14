import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.scss']
})
export class OrderDashboardComponent implements OnInit {

  loading = false;
  orderObj: any = null;
  pageLinks: Array<any> = [];
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(pageUrl = '?page=0&size=3', isPaid = true, deliverCode = 0) {
    this.loading = true;
    this.orderService.getOrders(pageUrl, isPaid, deliverCode).subscribe(
      (response: any) => {
        this.orderObj = response.data;
        this.pageLinks = response.pageLinks === undefined ? [] : response.pageLinks;
        this.loading = false;
        console.log(this.orderObj);
        console.log(this.pageLinks);
      }
    );
  }

  hasNextPage(): boolean {
    return this.pageLinks.findIndex((f) => f.rel === 'next') > -1;
  }
  getNextPageUri(): string {
    return this.hasNextPage() ? this.pageLinks.find((f) => f.rel === 'next').uri : '';
  }
  loadNextPage() {
    this.getOrders(this.getNextPageUri());
  }
  hasPrevPage(): boolean {
    return this.pageLinks.findIndex((f) => f.rel === 'prev') > -1;
  }
  getPrevPageUri(): string {
    return this.hasPrevPage() ? this.pageLinks.find((f) => f.rel === 'prev').uri : '';
  }
  loadPreviousPage() {
    this.getOrders(this.getPrevPageUri());
  }
  hasFirstPage(): boolean {
    return this.pageLinks.findIndex((f) => f.rel === 'first') > -1;
  }
  getFirstPageUri(): string {
    return this.hasFirstPage() ? this.pageLinks.find((f) => f.rel === 'first').uri : '';
  }
  loadFirstPage() {
    this.getOrders(this.getFirstPageUri());
  }
  hasLastPage(): boolean {
    return this.pageLinks.findIndex((f) => f.rel === 'last') > -1;
  }
  getLastPageUri(): string {
    return this.hasLastPage() ? this.pageLinks.find((f) => f.rel === 'last').uri : '';
  }
  loadLastPage() {
    this.getOrders(this.getLastPageUri());
  }

}
