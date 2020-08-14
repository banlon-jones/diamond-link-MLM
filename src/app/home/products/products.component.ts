import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {CartService} from "../cart/cart.service";
import {ProductsService} from '../manage-products/products.service';
import {MessageService} from 'primeng/api';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {productImageBaseUrl} from "../../services/app-http/backendUrlStrings";
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [NgbModalConfig, NgbModal, MessageService]
})
export class ProductsComponent implements OnInit {
  pageNumber = 0;
  products;
  activated = false;
  base_url = productImageBaseUrl.BASE_URI;
  currencyObj: any = {base: {symbol: 'PCH', name: 'PayCash', rate: 1}};
  exchangeCurrency;
  exCurrency: any = this.currencyObj.base;
  loading = true;
  cdialog = false;
  searchForm;
  results: any;
  orderObj: any = null;
  pageLinks: Array<any> = [];
  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private messageService: MessageService,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.activated = this.customerService.loadCustomerDetails().activated;
    this.getProducts();
    if (!this.activated) {
      this.getRegistrationOrder();
    }
    this.searchForm = new FormGroup({
      searchWord: new FormControl('', Validators.required)
    });
  }
  getRegistrationOrder() {
    this.customerService.getRegistrationOrders().subscribe(
      (response: any) => {
        this.orderObj = response.data;
      }, (error) => {
        console.log(error);
      }
    );
  }
  searchProduct() {
    this.productService.searchProduct(this.searchForm.value.searchWord).subscribe(
      (data: any) => {
        if (data.length === 0) {
          this.toastSingle({message: 'Oops Sorry! Product not found!' , severity: 'error', summary: 'error'});
        }
        this.results = data;
      }
    );
  }
  getProducts(pageUri: string = '?page=0&size=20') {
    // this.products = this.productService.getAllProducts();

    this.productService.getAllProducts(pageUri).subscribe(
      (response: any) => {
        this.products = response.data;
        this.pageLinks = response.pageLinks === undefined ? [] : response.pageLinks;
        this.loading = false;
        console.log(this.products);
        console.log(this.pageLinks);
      }
    );
  }
  // pagination //
  /*nextPage() {
    this.pageNumber ++;
    this.productService.getAllProducts(this.pageNumber).subscribe(
      (response: any) => {
        if (response.data.length === 0) {
          this.pageNumber -- ;
          this.getProducts();
        }
        this.products = response.data;
      }
    );
  }*/
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
  previousPage() {
    if (this.pageNumber > 1 ) {
      this.pageNumber --; // decreasement pagenumber
      this.getProducts();
    }
    this.pageNumber = 0;
  }
  addToCart(product: any, quantity: number) {
    if (product.stock === 0) {
      this.toastSingle({message: 'Oops Sorry! ' + product.name + ' is out of stock.' , severity: 'error', summary: 'error'});
    } else if (quantity > product.stock) {
      this.toastSingle({message: 'Oops Sorry! ' + product.name + ' has only ' +
      product.stock + ' ' + product.measurementUnit.name, severity: 'error', summary: 'error'});
    } else {
      if (!this.activated) {
        this.cartService.addItemToRegistrationCart(
          {productId: product.id, quantity: quantity},
          this.orderObj === null ? 0 : this.orderObj.order.id).subscribe(
          () => this.cartService.getCartItems().subscribe(
            (respone: any) => {
              this.cartService.updateCartCount(respone.length);
            }
          ), (error) => {
            console.log(error);
          }
        );
      } else {
        this.cartService.addItemToCart({
          productId: product.id,
          quantity: quantity,
        }).subscribe(
          (response: any) => {
            // alert(response.message);
            this.cartService.getCartItems().subscribe(
              (respon: any) => {
                this.cartService.updateCartCount(respon.length);
              }
            );
            console.log(response);
          },
          (error) => {
            console.log(error.message);
          });
      }
    }
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
  toastSingle(toast: {message: string, severity: string, summary: string}) {
    this.messageService.add({severity: toast.severity, summary: 'DLC ' +
    toast.summary + ' Message', detail: toast.message});
  }
}
