import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from './services/customer.service';
import { AuthserviceService } from '../public/authservice.service';
var AdminGuardService = /** @class */ (function () {
    function AdminGuardService(customerService, router, authservice) {
        this.customerService = customerService;
        this.router = router;
        this.authservice = authservice;
    }
    AdminGuardService.prototype.canActivate = function (next, state) {
        var url = state.url;
        return this.checkActivation(url);
    };
    AdminGuardService.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AdminGuardService.prototype.checkActivation = function (url) {
        if (this.customerService.loadCustomerDetails().isAdmin) {
            return true;
        }
        this.authservice.redirectUrl = url;
        // redirect to payments page
        this.router.navigate(['/payments']);
        return false;
    };
    AdminGuardService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [CustomerService,
            Router, AuthserviceService])
    ], AdminGuardService);
    return AdminGuardService;
}());
export { AdminGuardService };
//# sourceMappingURL=admin-guard.service.js.map