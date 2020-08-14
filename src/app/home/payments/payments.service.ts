import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {utilitiesUrls, paymentsUrls} from '../../services/app-http/backendUrlStrings';
import {CurrencyService} from '../../services/currencies/currency.service';
import {AuthserviceService} from '../../public/authservice.service';
// import {Order, Invoice, Item} from '../services/interfaces/payments.interface';
export interface OrderToPay {
  orderId: number;
  payingAmount: number;
}
export interface PayMtnMomoBasic {
  currency: string;
  orderId: number;
  phoneNumber: string;
}
export interface PayPayCash {
  orderId: number;
  password: string;
}
export interface PayVoucher {
  orderId: number;
  voucherCode: string;
}
@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
orderId = 0;
payingAmount = 0.0;
  constructor(private http: HttpClient,
              private currencyService: CurrencyService, private authService: AuthserviceService) { }

  getOrders(registered: boolean) {
    // for non registered customers
    // show them their registration orders only
    // for registered customers show all pending orders
    return registered ? this.getPendingOrders() : this.getRegistrationOrders();
  }
  getRegistrationOrders() {
    return this.http.get(paymentsUrls.GET_REGISTRATION_ORDERS);
  }
  getPendingOrders() {
    return this.http.get(paymentsUrls.GET_PENDING_ORDERS);
  }
  getPaymentChannels() {
    return this.http.get(paymentsUrls.GET_PAYMENT_CHANNELS);
  }
  getOrderToPay(): OrderToPay {
    return (this.orderId === 0 || this.payingAmount === 0.0) ? null : {orderId: this.orderId, payingAmount: this.payingAmount};
  }
  setOrderToPay(order: OrderToPay) {
    this.orderId = order.orderId;
    this.payingAmount = order.payingAmount;
  }
  clearOrderToPay() {
    this.orderId = 0;
    this.payingAmount = 0.0;
  }
  storePaymentChannels(channels: any) {
    localStorage.setItem('paymentChannels', JSON.stringify(channels));
  }
  retrievePaymentChannels() {
    return JSON.parse(localStorage.getItem('paymentChannels'));
  }
  payWithPayCash(payPayCash: PayPayCash) {
    return this.http.post(paymentsUrls.PAY_WITH_PAYCASH, payPayCash);
  }
  payWithVoucher(payVoucher: PayVoucher) {
    return this.http.post(paymentsUrls.PAY_WITH_VOUCHER, payVoucher);
  }
  payWithMtnMomoBasic(payMtnMomoBasic: PayMtnMomoBasic) {
    return this.http.post(paymentsUrls.PAY_WITH_MTN_MOMO_BASIC, payMtnMomoBasic);
  }
  getAvailableCurrencies() {
    return this.currencyService.getCurrencyObj();
  }
  getCurrencyObj() {
    return this.currencyService.getCurrencyObj();
  }
  getExchangeCurrency(exchangeCurrencyStr: string) {
    return this.currencyService.getExchangeCurrency(exchangeCurrencyStr);
  }
  createVoucher(voucher: {amount: Number, password: string}) {
    return this.http.post(paymentsUrls.CREATE_VOUCHER, voucher);
  }
  createMakerAccount(password: string) {
    return this.http.post(paymentsUrls.CREATE_MAKER_ACCOUNT, {password: password});
  }
  refreshCustomerDetails() {
    this.authService.startRefreshTokenTimeout();
  }
}
