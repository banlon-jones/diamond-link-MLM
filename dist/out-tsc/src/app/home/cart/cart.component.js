import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CartService } from "./cart.service";
import { Router } from "@angular/router";
var CartComponent = /** @class */ (function () {
    function CartComponent(cartService, router) {
        this.cartService = cartService;
        this.router = router;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.getCartItems();
    };
    CartComponent.prototype.updateCart = function (productId, quantity) {
        var _this = this;
        this.cartService.updateCart([{
                productId: productId,
                quantity: quantity
            }]).subscribe(function (response) {
            console.log(response);
            _this.getCartItems();
        }, function (error) {
            console.log(error);
        });
    };
    CartComponent.prototype.getCartItems = function () {
        var _this = this;
        this.cartService.getCartItems().subscribe(function (cartItems) {
            _this.cartItems = cartItems;
            _this.cartService.updateCartCount(_this.cartItems.length);
            _this.total = _this.cartItems.forEach(function (cartItem) {
                return cartItem.product.quantity * cartItem.price;
            });
        }, function (error) {
            alert(error.message);
            // console.log(error);
        });
    };
    CartComponent.prototype.checkoutCart = function () {
        var _this = this;
        this.cartService.checkout().subscribe(function (response) {
            _this.cartService.updateCartCount(0);
            _this.router.navigate(['/payments']);
            console.log(response);
        }, function (err) {
            console.log(err);
        });
    };
    CartComponent.prototype.removeItem = function (id) {
        var _this = this;
        this.cartService.removeCartItem([id]).subscribe(function (response) {
            _this.getCartItems();
        }, function (error) {
            console.log(error);
        });
    };
    CartComponent.prototype.emptyCart = function () {
        var _this = this;
        this.cartService.emptyCart().subscribe(function (reponse) {
            console.log(reponse);
            _this.router.navigate(['/products']);
        }, function (error) {
            console.log(error);
        });
    };
    CartComponent = tslib_1.__decorate([
        Component({
            selector: 'app-cart',
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [CartService,
            Router])
    ], CartComponent);
    return CartComponent;
}());
export { CartComponent };
//# sourceMappingURL=cart.component.js.map