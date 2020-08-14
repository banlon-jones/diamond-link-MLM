import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { PaymentsService } from '../payments.service';
var PaymentOrderRowComponent = /** @class */ (function () {
    function PaymentOrderRowComponent(paymentService) {
        this.paymentService = paymentService;
    }
    PaymentOrderRowComponent.prototype.ngOnInit = function () {
    };
    PaymentOrderRowComponent.prototype.showDashboard = function (orderId, amount) {
        console.log('Setting order to pay...');
        this.paymentService.setOrderToPay({ orderId: orderId, payingAmount: amount });
    };
    PaymentOrderRowComponent.prototype.getRatedPrice = function (price) {
        return price * this.exCurrency.rate;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PaymentOrderRowComponent.prototype, "orderItem", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PaymentOrderRowComponent.prototype, "orderDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PaymentOrderRowComponent.prototype, "exCurrency", void 0);
    PaymentOrderRowComponent = tslib_1.__decorate([
        Component({
            selector: '[app-payment-order-row]',
            templateUrl: './payment-order-row.component.html',
            styleUrls: ['./payment-order-row.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [PaymentsService])
    ], PaymentOrderRowComponent);
    return PaymentOrderRowComponent;
}());
export { PaymentOrderRowComponent };
//# sourceMappingURL=payment-order-row.component.js.map