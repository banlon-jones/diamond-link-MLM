import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {ProductsService} from "../../home/manage-products/products.service";
import {CustomerService, PermissionGroup} from '../../home/services/customer.service';
import {AuthserviceService} from '../authservice.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {
  public customerDetails: any;
  products;
  pageNumber = 0;
  currencyObj: any = {base: {symbol: 'PCH', name: 'PayCash', rate: 1}};
  exchangeCurrency;
  exCurrency: any = this.currencyObj.base;
  loading = true;
  cdialog = false;
  pageLinks: Array<any> = [];
  constructor(
    private productService: ProductsService,
    private authService: AuthserviceService
  ) { }

  ngOnInit() {
    this.getProducts();
    this.customerDetails = JSON.parse(this.authService.retrieveAuthCustomerDetials());
  }
  getProducts(pageUri: string = '?page=0&size=4') {
    // this.products = this.productService.getAllProducts();
    this.loading = true;
    this.productService.getAllProducts(pageUri).subscribe(
      (response: any) => {
        this.loading = false;
        this.products = response.data;
        this.pageLinks = response.pageLinks === undefined ? [] : response.pageLinks;
        console.log(this.products);
      }
    );
  }

  // get customer's name to display on navbar
  getCustomerDetails() {
    return this.customerDetails;
  }

  getExchangeCurrency() {
    if (this.exchangeCurrency === undefined ) {
      return this.currencyObj.base;
    }
    this.exCurrency = this.productService.getExchangeCurrency(this.exchangeCurrency);
    return this.exCurrency;
  }
  getRatedPrice(price: any) {
    return price * this.exCurrency.rate;
  }
  showCurrencyDialog() {
    this.cdialog = true;
  }
  hideCurrencyDialog() {
    this.cdialog = false;
  }
  getCurrencyObj() {
    return this.productService.getCurrencyObj();
  }
  hasNextPage(): boolean {
    return this.pageLinks.findIndex((f) => f.rel === 'next') > -1;
  }
  getNextPageUri(): string {
    return this.hasNextPage() ? this.pageLinks.find((f) => f.rel === 'next').uri : '';
  }
  loadNextPage() {
    this.getProducts(this.getNextPageUri());
  }
  hasPrevPage(): boolean {
    return this.pageLinks.findIndex((f) => f.rel === 'prev') > -1;
  }
  getPrevPageUri(): string {
    return this.hasPrevPage() ? this.pageLinks.find((f) => f.rel === 'prev').uri : '';
  }
  loadPreviousPage() {
    this.getProducts(this.getPrevPageUri());
  }
  hasFirstPage(): boolean {
    return this.pageLinks.findIndex((f) => f.rel === 'first') > -1;
  }
  getFirstPageUri(): string {
    return this.hasFirstPage() ? this.pageLinks.find((f) => f.rel === 'first').uri : '';
  }
  loadFirstPage() {
    this.getProducts(this.getFirstPageUri());
  }
  hasLastPage(): boolean {
    return this.pageLinks.findIndex((f) => f.rel === 'last') > -1;
  }
  getLastPageUri(): string {
    return this.hasLastPage() ? this.pageLinks.find((f) => f.rel === 'last').uri : '';
  }
  loadLastPage() {
    this.getProducts(this.getLastPageUri());
  }
}
