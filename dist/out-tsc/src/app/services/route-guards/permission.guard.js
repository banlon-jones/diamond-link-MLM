import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../public/authservice.service';
import { CustomerService } from '../../home/services/customer.service';
var PermissionGuard = /** @class */ (function () {
    function PermissionGuard(authService, customerService, router) {
        this.authService = authService;
        this.customerService = customerService;
        this.router = router;
    }
    PermissionGuard.prototype.canActivate = function (next, state) {
        var url = state.url;
        return this.checkPermissions(url, next);
    };
    PermissionGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    PermissionGuard.prototype.checkPermissions = function (url, route) {
        // check login
        if (!this.authService.isUserLogged() && !this.customerService.loadCustomerDetails().activated) {
            // redirect to signin page
            this.router.navigate(['/signin']);
            return false;
        }
        // get permissions to check
        var permissionsToCheck = route.data['permissions'];
        // get user permissions
        var userPermissions = this.customerService.getCustomerPermissionList();
        var _loop_1 = function (p) {
            // if user has permission to check
            // activate
            if (userPermissions.findIndex(function (value) { return value.toUpperCase() === p.toUpperCase(); }) > -1) {
                return { value: true };
            }
        };
        for (var _i = 0, permissionsToCheck_1 = permissionsToCheck; _i < permissionsToCheck_1.length; _i++) {
            var p = permissionsToCheck_1[_i];
            var state_1 = _loop_1(p);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        // store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        this.router.navigate(['/products']);
        return false;
    };
    PermissionGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AuthserviceService,
            CustomerService, Router])
    ], PermissionGuard);
    return PermissionGuard;
}());
export { PermissionGuard };
//# sourceMappingURL=permission.guard.js.map