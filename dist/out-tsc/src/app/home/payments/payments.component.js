import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PaymentsService } from './payments.service';
import { CustomerService } from '../services/customer.service';
import { isArray } from 'util';
var PaymentsComponent = /** @class */ (function () {
    function PaymentsComponent(paymentsService, customerService) {
        this.paymentsService = paymentsService;
        this.customerService = customerService;
        this.loading = true;
        this.activated = false;
        this.successMessage = '';
        this.paymentSuccess = false;
        this.registrationFee = 0.0;
        this.currencyObj = { base: { symbol: 'PCH', name: 'PayCash', rate: 1 } };
        this.exCurrency = this.currencyObj.base;
        this.cdialog = false;
    }
    PaymentsComponent.prototype.ngOnInit = function () {
        this.cdialog = false;
        this.activated = this.customerService.loadCustomerDetails().activated;
        this.loadOrders(this.activated);
        this.paymentSuccess = false;
    };
    PaymentsComponent.prototype.loadOrders = function (registered) {
        var _this = this;
        this.registrationFee = 0.0;
        this.paymentsService.getOrders(registered).subscribe(function (response) {
            console.log(response);
            if (response.data.order !== undefined && response.data.registrationFee !== undefined) {
                // this is true for a registration order only
                _this.orders = [response.data.order];
                _this.registrationFee = response.data.registrationFee;
            }
            else if (isArray(response.data)) {
                // a list of orders
                _this.orders = response.data;
            }
            else {
                // a single order
                _this.orders = [response.data];
            }
            _this.loading = false;
        }, function (httpError) {
            console.log(httpError);
        });
    };
    PaymentsComponent.prototype.getOrders = function () {
        return this.orders;
    };
    PaymentsComponent.prototype.getOderDate = function (date) {
        return new Date(date);
    };
    PaymentsComponent.prototype.getOrdersTotal = function () {
        var total = 0.0;
        if (this.orders !== undefined) {
            for (var _i = 0, _a = this.orders; _i < _a.length; _i++) {
                var order = _a[_i];
                total += order.transactionBean.amount;
            }
        }
        return (total + this.registrationFee) * this.exCurrency.rate;
    };
    PaymentsComponent.prototype.getOrderToPay = function () {
        return this.paymentsService.getOrderToPay();
    };
    PaymentsComponent.prototype.onPaymentSuccess = function (registered) {
        this.paymentSuccess = true;
        this.successMessage = 'Payment successful! ' +
            (this.activated ? '' : 'Account is fully functional. Please logout and login again to see changes!');
        this.loadOrders(registered);
    };
    PaymentsComponent.prototype.getExchangeCurrency = function () {
        if (this.exchangeCurrency === undefined) {
            return this.currencyObj.base;
        }
        this.exCurrency = this.paymentsService.getExchangeCurrency(this.exchangeCurrency);
        return this.exCurrency;
    };
    PaymentsComponent.prototype.getRatedPrice = function (price) {
        return price * this.exCurrency.rate;
    };
    PaymentsComponent.prototype.showCurrencyDialog = function () {
        this.cdialog = true;
    };
    PaymentsComponent.prototype.hideCurrencyDialog = function () {
        this.cdialog = false;
    };
    PaymentsComponent.prototype.getCurrencyObj = function () {
        return this.paymentsService.getCurrencyObj();
    };
    PaymentsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-payments',
            templateUrl: './payments.component.html',
            styleUrls: ['./payments.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [PaymentsService,
            CustomerService])
    ], PaymentsComponent);
    return PaymentsComponent;
}());
export { PaymentsComponent };
//# sourceMappingURL=payments.component.js.map