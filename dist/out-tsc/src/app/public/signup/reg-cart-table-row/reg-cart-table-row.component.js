import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { RegCartServiceService } from '../reg-cart-service.service';
import { MessageService } from 'primeng/api';
var RegCartTableRowComponent = /** @class */ (function () {
    function RegCartTableRowComponent(cartService, messageService) {
        this.cartService = cartService;
        this.messageService = messageService;
    }
    RegCartTableRowComponent.prototype.ngOnInit = function () {
        this.quantity = this.cartItem.quantity;
    };
    RegCartTableRowComponent.prototype.removeFromRegistrationCart = function (productId) {
        this.cartService.removeFromRegistrationCart(productId);
    };
    RegCartTableRowComponent.prototype.updateCartItem = function (product, quantity) {
        console.log('stock: ' + product.stock);
        if (product.stock === 0) {
            this.toastSingle({ message: 'Oops Sorry! ' + product.name + ' is out of stock.', severity: 'error', summary: 'error' });
        }
        else if (quantity > product.stock) {
            this.toastSingle({ message: 'Oops Sorry! ' + product.name + ' has only ' +
                    product.stock + ' ' + product.measurementUnit.name, severity: 'error', summary: 'error' });
        }
        else {
            this.cartService.updateCartItem(product, quantity);
        }
    };
    RegCartTableRowComponent.prototype.toastSingle = function (toast) {
        this.messageService.add({ severity: toast.severity, summary: 'DLC ' +
                toast.summary + ' Message', detail: toast.message });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], RegCartTableRowComponent.prototype, "cartItem", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], RegCartTableRowComponent.prototype, "price", void 0);
    RegCartTableRowComponent = tslib_1.__decorate([
        Component({
            selector: '[app-reg-cart-table-row]',
            templateUrl: './reg-cart-table-row.component.html',
            styleUrls: ['./reg-cart-table-row.component.scss'],
            providers: [MessageService],
        }),
        tslib_1.__metadata("design:paramtypes", [RegCartServiceService, MessageService])
    ], RegCartTableRowComponent);
    return RegCartTableRowComponent;
}());
export { RegCartTableRowComponent };
//# sourceMappingURL=reg-cart-table-row.component.js.map