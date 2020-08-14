import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paymentsUrls } from '../../services/app-http/backendUrlStrings';
import { CurrencyService } from '../../services/currencies/currency.service';
import { AuthserviceService } from '../../public/authservice.service';
var PaymentsService = /** @class */ (function () {
    function PaymentsService(http, currencyService, authService) {
        this.http = http;
        this.currencyService = currencyService;
        this.authService = authService;
        this.orderId = 0;
        this.payingAmount = 0.0;
    }
    PaymentsService.prototype.getOrders = function (registered) {
        // for non registered customers
        // show them their registration orders only
        // for registered customers show all pending orders
        return registered ? this.getPendingOrders() : this.getRegistrationOrders();
    };
    PaymentsService.prototype.getRegistrationOrders = function () {
        return this.http.get(paymentsUrls.GET_REGISTRATION_ORDERS);
    };
    PaymentsService.prototype.getPendingOrders = function () {
        return this.http.get(paymentsUrls.GET_PENDING_ORDERS);
    };
    PaymentsService.prototype.getPaymentChannels = function () {
        return this.http.get(paymentsUrls.GET_PAYMENT_CHANNELS);
    };
    PaymentsService.prototype.getOrderToPay = function () {
        return (this.orderId === 0 || this.payingAmount === 0.0) ? null : { orderId: this.orderId, payingAmount: this.payingAmount };
    };
    PaymentsService.prototype.setOrderToPay = function (order) {
        this.orderId = order.orderId;
        this.payingAmount = order.payingAmount;
    };
    PaymentsService.prototype.clearOrderToPay = function () {
        this.orderId = 0;
        this.payingAmount = 0.0;
    };
    PaymentsService.prototype.storePaymentChannels = function (channels) {
        localStorage.setItem('paymentChannels', JSON.stringify(channels));
    };
    PaymentsService.prototype.retrievePaymentChannels = function () {
        return JSON.parse(localStorage.getItem('paymentChannels'));
    };
    PaymentsService.prototype.payWithPayCash = function (payPayCash) {
        return this.http.post(paymentsUrls.PAY_WITH_PAYCASH, payPayCash);
    };
    PaymentsService.prototype.payWithVoucher = function (payVoucher) {
        return this.http.post(paymentsUrls.PAY_WITH_VOUCHER, payVoucher);
    };
    PaymentsService.prototype.payWithMtnMomoBasic = function (payMtnMomoBasic) {
        return this.http.post(paymentsUrls.PAY_WITH_MTN_MOMO_BASIC, payMtnMomoBasic);
    };
    PaymentsService.prototype.getAvailableCurrencies = function () {
        return this.currencyService.getCurrencyObj();
    };
    PaymentsService.prototype.getCurrencyObj = function () {
        return this.currencyService.getCurrencyObj();
    };
    PaymentsService.prototype.getExchangeCurrency = function (exchangeCurrencyStr) {
        return this.currencyService.getExchangeCurrency(exchangeCurrencyStr);
    };
    PaymentsService.prototype.createVoucher = function (voucher) {
        return this.http.post(paymentsUrls.CREATE_VOUCHER, voucher);
    };
    PaymentsService.prototype.createMakerAccount = function (password) {
        return this.http.post(paymentsUrls.CREATE_MAKER_ACCOUNT, { password: password });
    };
    PaymentsService.prototype.refreshCustomerDetails = function () {
        this.authService.startRefreshTokenTimeout();
    };
    PaymentsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            CurrencyService, AuthserviceService])
    ], PaymentsService);
    return PaymentsService;
}());
export { PaymentsService };
//# sourceMappingURL=payments.service.js.map