import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PaymentsService } from '../payments.service';
import { BASE_URI } from '../../../services/app-http/backendUrlStrings';
import { MessageService } from 'primeng/api';
var PaymentDashboardComponent = /** @class */ (function () {
    function PaymentDashboardComponent(paymentsService, messageService) {
        this.paymentsService = paymentsService;
        this.messageService = messageService;
        this.onPaymentSuccess = new EventEmitter();
        this.paymentChannels = [];
        this.paying = false;
        this.base_uri = BASE_URI;
    }
    PaymentDashboardComponent.prototype.ngOnInit = function () {
        this.getPaymentChannels();
    };
    PaymentDashboardComponent.prototype.getPaymentChannels = function () {
        this.paymentChannels = this.paymentsService.retrievePaymentChannels();
        console.log(this.paymentChannels);
    };
    PaymentDashboardComponent.prototype.getPaymentChannel = function (channelName) {
        this.paymentChannel = this.paymentChannels.find(function (pChannel) { return pChannel.name === channelName; });
        return this.paymentChannel;
    };
    PaymentDashboardComponent.prototype.payWithPayCash = function () {
        var _this = this;
        this.showPayDialog();
        this.paymentsService.payWithPayCash({ orderId: this.orderToPay.orderId, password: this.password }).subscribe(function (response) {
            console.log(response);
            _this.onPaymentSuccess.emit();
            _this.paymentsService.clearOrderToPay();
            _this.password = '';
            _this.hidePayDialog();
            _this.toastSingle({ message: 'Payment Successful',
                severity: 'success', summary: 'success' });
        }, function (httpError) {
            _this.handlePaymentError(httpError);
        });
    };
    PaymentDashboardComponent.prototype.payWithVoucher = function () {
        var _this = this;
        this.showPayDialog();
        this.paymentsService.payWithVoucher({ orderId: this.orderToPay.orderId, voucherCode: this.voucherCode }).subscribe(function (response) {
            _this.hidePayDialog();
            _this.toastSingle({ message: 'Payment Successful',
                severity: 'success', summary: 'success' });
            console.log(response);
            _this.onPaymentSuccess.emit();
            _this.paymentsService.clearOrderToPay();
            _this.voucherCode = '';
        }, function (httpError) {
            _this.handlePaymentError(httpError);
        });
    };
    PaymentDashboardComponent.prototype.payWithMtnMomoBasic = function () {
        var _this = this;
        this.showPayDialog();
        this.paymentsService.payWithMtnMomoBasic({ orderId: this.orderToPay.orderId, phoneNumber: this.phoneNumber, currency: 'XAF' }).subscribe(function (response) {
            _this.hidePayDialog();
            _this.toastSingle({ message: 'Payment Successful',
                severity: 'success', summary: 'success' });
            console.log(response);
            _this.onPaymentSuccess.emit();
            _this.paymentsService.clearOrderToPay();
            _this.phoneNumber = '';
        }, function (httpError) {
            _this.handlePaymentError(httpError);
        });
    };
    PaymentDashboardComponent.prototype.toastSingle = function (toast) {
        this.messageService.add({ severity: toast.severity, summary: 'DLC ' +
                toast.summary + ' Message', detail: toast.message });
    };
    PaymentDashboardComponent.prototype.handlePaymentError = function (httpError) {
        console.log(httpError);
        this.hidePayDialog();
        if (httpError.error.code !== undefined && httpError.error.code === 'VALIDATION_ERROR') {
            for (var _i = 0, _a = Object.values(httpError.error.errors); _i < _a.length; _i++) {
                var errorVal = _a[_i];
                this.toastSingle({ message: 'Oops Sorry! ' + errorVal,
                    severity: 'error', summary: 'error' });
            }
        }
        else {
            this.toastSingle({ message: 'Oops Sorry! ' + httpError.error.message,
                severity: 'error', summary: 'error' });
        }
    };
    PaymentDashboardComponent.prototype.showPayDialog = function () {
        this.paying = true;
    };
    PaymentDashboardComponent.prototype.hidePayDialog = function () {
        this.paying = false;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PaymentDashboardComponent.prototype, "orderToPay", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PaymentDashboardComponent.prototype, "exCurrency", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], PaymentDashboardComponent.prototype, "onPaymentSuccess", void 0);
    PaymentDashboardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-payment-dashboard',
            templateUrl: './payment-dashboard.component.html',
            styleUrls: ['./payment-dashboard.component.scss'],
            providers: [MessageService]
        }),
        tslib_1.__metadata("design:paramtypes", [PaymentsService, MessageService])
    ], PaymentDashboardComponent);
    return PaymentDashboardComponent;
}());
export { PaymentDashboardComponent };
//# sourceMappingURL=payment-dashboard.component.js.map