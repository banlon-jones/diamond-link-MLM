import { Component, OnInit } from '@angular/core';
import {PaymentsService} from './payments.service';
import {CustomerService} from '../services/customer.service';
import {isArray} from 'util';
interface CustomApiResponse {
  code: string;
  message: string;
  data: Array<any>;
}
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
orders: any;
loading = true;
activated = false;
successMessage = '';
paymentSuccess = false;
registrationFee = 0.0;
currencyObj: any = {base: {symbol: 'PCH', name: 'PayCash', rate: 1}};
exchangeCurrency;
exCurrency: any = this.currencyObj.base;
cdialog = false;
  constructor(private paymentsService: PaymentsService,
              private customerService: CustomerService) { }

  ngOnInit() {
    this.cdialog = false;
    this.activated = this.customerService.loadCustomerDetails().activated;
    this.loadOrders(this.activated);
    this.paymentSuccess = false;
  }
  loadOrders(registered: boolean) {
    this.registrationFee = 0.0;
    this.paymentsService.getOrders(registered).subscribe(
      (response: any) => {
        console.log(response);
        if (response.data.order !== undefined && response.data.registrationFee !== undefined) {
          // this is true for a registration order only
          this.orders = [response.data.order];
          this.registrationFee = response.data.registrationFee;
        } else if (isArray(response.data)) {
          // a list of orders
          this.orders = response.data;
        }  else {
          // a single order
          this.orders = [response.data];
        }
        this.loading = false;
      },
      (httpError) => {
        console.log(httpError);
      }
    );
  }
  getOrders() {
    return this.orders;
  }
  getOderDate(date: number) {
    return new Date(date);
  }
  getOrdersTotal() {
    let total = 0.0;
    if (this.orders !== undefined) {
      for ( const order of this.orders) {
        total += order.transactionBean.amount;
      }
    }
    return total  * this.exCurrency.rate;
  }
  getOrderToPay() {
    return this.paymentsService.getOrderToPay();
  }
  onPaymentSuccess(registered: boolean) {
    this.paymentSuccess = true;
    this.successMessage = 'Payment successful! ' +
      (this.activated ? '' : 'Account is fully functional. Please logout and login again to see changes!');
    this.loadOrders(registered);
  }
  getExchangeCurrency() {
    if (this.exchangeCurrency === undefined ) {
      return this.currencyObj.base;
    }
    this.exCurrency = this.paymentsService.getExchangeCurrency(this.exchangeCurrency);
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
    return this.paymentsService.getCurrencyObj();
  }
}
