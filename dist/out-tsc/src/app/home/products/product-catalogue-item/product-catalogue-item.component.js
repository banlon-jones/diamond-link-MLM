import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { CartService } from "../../cart/cart.service";
var ProductCatalogueItemComponent = /** @class */ (function () {
    function ProductCatalogueItemComponent(cartService) {
        this.cartService = cartService;
    }
    ProductCatalogueItemComponent.prototype.ngOnInit = function () {
    };
    ProductCatalogueItemComponent.prototype.getRatedPrice = function () {
        return this.product.price * this.currency.rate;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ProductCatalogueItemComponent.prototype, "currencyObj", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ProductCatalogueItemComponent.prototype, "product", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ProductCatalogueItemComponent.prototype, "currency", void 0);
    ProductCatalogueItemComponent = tslib_1.__decorate([
        Component({
            selector: '[app-product-catalogue-item]',
            templateUrl: './product-catalogue-item.component.html',
            styleUrls: ['./product-catalogue-item.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [CartService])
    ], ProductCatalogueItemComponent);
    return ProductCatalogueItemComponent;
}());
export { ProductCatalogueItemComponent };
//# sourceMappingURL=product-catalogue-item.component.js.map