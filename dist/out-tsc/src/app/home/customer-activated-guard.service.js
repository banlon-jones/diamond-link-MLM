import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from './services/customer.service';
import { AuthserviceService } from '../public/authservice.service';
var CustomerActivatedGuardService = /** @class */ (function () {
    function CustomerActivatedGuardService(customerService, router, authservice) {
        this.customerService = customerService;
        this.router = router;
        this.authservice = authservice;
    }
    CustomerActivatedGuardService.prototype.canActivate = function (next, state) {
        var url = state.url;
        return this.checkActivation(url);
    };
    CustomerActivatedGuardService.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    CustomerActivatedGuardService.prototype.checkActivation = function (url) {
        if (this.customerService.loadCustomerDetails().activated) {
            return true;
        }
        this.authservice.redirectUrl = url;
        // redirect to signin page
        this.router.navigate(['/products']);
        return false;
    };
    CustomerActivatedGuardService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [CustomerService,
            Router, AuthserviceService])
    ], CustomerActivatedGuardService);
    return CustomerActivatedGuardService;
}());
export { CustomerActivatedGuardService };
//# sourceMappingURL=customer-activated-guard.service.js.map