import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { cartUrls } from "../../services/app-http/backendUrlStrings";
import { isArray } from "util";
import { BehaviorSubject } from "rxjs/Rx";
var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
        this.currentCartCount = new BehaviorSubject(0);
        this.currentMessage = this.currentCartCount.asObservable();
        this.subTotal = 0;
    }
    CartService.prototype.addItemToCart = function (item) {
        if (!isArray(item)) {
            item = [item];
        }
        return this.http.post(cartUrls.ADDTOCART, item);
    };
    CartService.prototype.updateCartCount = function (count) {
        this.currentCartCount.next(count);
        console.log(this.currentCartCount.value);
    };
    CartService.prototype.updateCart = function (item) {
        return this.http.post(cartUrls.UPDATECART, item);
    };
    CartService.prototype.getCartItems = function () {
        return this.http.get(cartUrls.GETCARTITEMS).map(function (response) {
            var cartItems = response.data;
            return cartItems;
        }, function (error) {
            console.log(error);
        });
    };
    CartService.prototype.removeCartItem = function (id) {
        return this.http.post(cartUrls.REMOVE, id);
    };
    CartService.prototype.emptyCart = function () {
        return this.http.delete(cartUrls.CLEARCART);
    };
    CartService.prototype.checkout = function () {
        return this.http.post(cartUrls.CHECKOUT, {});
    };
    CartService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CartService);
    return CartService;
}());
export { CartService };
//# sourceMappingURL=cart.service.js.map