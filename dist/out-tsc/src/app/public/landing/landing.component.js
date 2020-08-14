import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ProductsService } from "../../home/manage-products/products.service";
var LandingComponent = /** @class */ (function () {
    function LandingComponent(productService) {
        this.productService = productService;
        this.pageNumber = 0;
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    LandingComponent.prototype.getProducts = function () {
        var _this = this;
        // this.products = this.productService.getAllProducts();
        this.productService.getAllProducts(this.pageNumber).subscribe(function (response) {
            _this.products = response.data;
            console.log(_this.products);
        });
    };
    LandingComponent = tslib_1.__decorate([
        Component({
            selector: 'app-landing',
            templateUrl: './landing.component.html',
            styleUrls: ['./landing.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [ProductsService])
    ], LandingComponent);
    return LandingComponent;
}());
export { LandingComponent };
//# sourceMappingURL=landing.component.js.map