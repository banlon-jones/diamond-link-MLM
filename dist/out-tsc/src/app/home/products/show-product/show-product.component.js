import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductsService } from "../../manage-products/products.service";
import { ActivatedRoute } from '@angular/router';
import { CartService } from "../../cart/cart.service";
var ShowProductComponent = /** @class */ (function () {
    function ShowProductComponent(productService, cartService, route) {
        this.productService = productService;
        this.cartService = cartService;
        this.route = route;
        this.quantity = 1;
    }
    ShowProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get signup parameter
        this.route.params.subscribe(function (params) {
            _this.productId = params['id'];
        });
        this.getProduct(this.productId);
    };
    ShowProductComponent.prototype.getProduct = function (productId) {
        var _this = this;
        this.productService.getProduct(productId).subscribe(function (data) {
            _this.product = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    ShowProductComponent.prototype.addProductToCart = function (productId, quantity) {
        var _this = this;
        console.log([productId, quantity]);
        this.cartService.addItemToCart([{
                productId: productId,
                quantity: quantity
            }]).subscribe(function (response) {
            // alert(response.message);
            _this.cartService.getCartItems().subscribe(function (respon) {
                _this.cartService.updateCartCount(respon.length);
            });
            console.log(response);
        }, function (error) {
            console.log(error.message);
        });
    };
    ShowProductComponent = tslib_1.__decorate([
        Component({
            selector: 'app-show-product',
            templateUrl: './show-product.component.html',
            styleUrls: ['./show-product.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ProductsService,
            CartService,
            ActivatedRoute])
    ], ShowProductComponent);
    return ShowProductComponent;
}());
export { ShowProductComponent };
//# sourceMappingURL=show-product.component.js.map