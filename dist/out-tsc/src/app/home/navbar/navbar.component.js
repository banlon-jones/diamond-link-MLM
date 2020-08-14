import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";
import { AuthserviceService } from "../../public/authservice.service";
import { BASE_URI } from '../../services/app-http/backendUrlStrings';
import { CartService } from "../cart/cart.service";
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(config, router, authservice, cartService) {
        this.router = router;
        this.authservice = authservice;
        this.cartService = cartService;
        this.sidebarOpened = false;
        this.base_uri = BASE_URI;
        config.placement = 'bottom-right';
    }
    NavbarComponent.prototype.toggleOffcanvas = function () {
        this.sidebarOpened = !this.sidebarOpened;
        if (this.sidebarOpened) {
            document.querySelector('.sidebar-offcanvas').classList.add('active');
        }
        else {
            document.querySelector('.sidebar-offcanvas').classList.remove('active');
        }
    };
    NavbarComponent.prototype.ngOnInit = function () {
        this.getCartItems();
    };
    NavbarComponent.prototype.logout = function () {
        this.authservice.signOut();
        this.router.navigate(['/signin']);
    };
    NavbarComponent.prototype.getCustomerDetails = function () {
        return JSON.parse(this.authservice.retrieveCustomerDetails());
    };
    NavbarComponent.prototype.getCartItems = function () {
        var _this = this;
        this.cartService.currentCartCount.subscribe(function (mgs) {
            _this.cartCount = mgs;
        });
    };
    NavbarComponent.prototype.removeItem = function (id) {
        this.cartService.removeCartItem(id);
        this.getCartItems();
    };
    NavbarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.scss'],
            providers: [NgbDropdownConfig]
        }),
        tslib_1.__metadata("design:paramtypes", [NgbDropdownConfig,
            Router,
            AuthserviceService,
            CartService])
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map