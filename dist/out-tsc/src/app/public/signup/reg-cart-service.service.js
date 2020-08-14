import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var RegCartServiceService = /** @class */ (function () {
    function RegCartServiceService() {
        this.cartItems = [];
        this.cartItemsRecycleBin = [];
        this.cartDTO = [];
        this.cartDTOBin = [];
    }
    RegCartServiceService.prototype.addToRegistrationCart = function (product, quantity) {
        // add if not exist
        // update if exists
        var found = this.cartItems.find(function (cartItem) { return cartItem.product.id === product.id; });
        console.log('found..:');
        console.log(found);
        if (found === undefined) {
            this.cartItems.push({ product: product, quantity: quantity });
            this.cartDTO.push({ productId: product.id, quantity: quantity });
        }
        else {
            this.updateCartItem(found.product, found.quantity + quantity);
        }
        console.log(this.cartItems);
        console.log(this.cartDTO);
    };
    RegCartServiceService.prototype.removeFromRegistrationCart = function (productId) {
        var remove = this.cartItems.findIndex(function (cartItem) { return cartItem.product.id === productId; });
        var rem = this.cartDTO.findIndex(function (cartDTO) { return cartDTO.productId === productId; });
        console.log('removing...');
        console.log(remove);
        if (remove != null && rem != null) {
            this.cartItems.splice(remove, 1);
            this.cartDTO.splice(rem, 1);
        }
    };
    RegCartServiceService.prototype.clearRegistrationCart = function () {
        this.cartItemsRecycleBin = this.cartItems;
        this.cartDTOBin = this.cartDTO;
        this.cartDTO = null;
        this.cartItems = null;
    };
    RegCartServiceService.prototype.updateCartItem = function (product, quantity) {
        var update = this.cartItems.findIndex(function (cartItem) { return cartItem.product.id === product.id; });
        var up = this.cartDTO.findIndex(function (cartDTO) { return cartDTO.productId === product.id; });
        console.log('updating...');
        console.log(update);
        if (update != null && up != null) {
            this.cartItems.splice(update, 1);
            this.cartDTO.splice(up, 1);
            this.cartItems.push({ product: product, quantity: quantity });
            this.cartDTO.push({ productId: product.id, quantity: quantity });
        }
    };
    RegCartServiceService.prototype.getRegistrationCartItems = function () {
        return this.cartItems;
    };
    RegCartServiceService.prototype.getRegistrationCartDTO = function () {
        return this.cartDTO;
    };
    RegCartServiceService.prototype.restoreCart = function () {
        this.cartItems = this.cartItemsRecycleBin;
        this.cartDTO = this.cartDTOBin;
    };
    RegCartServiceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RegCartServiceService);
    return RegCartServiceService;
}());
export { RegCartServiceService };
//# sourceMappingURL=reg-cart-service.service.js.map