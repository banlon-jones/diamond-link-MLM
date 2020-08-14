import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authservice, router) {
        this.authservice = authservice;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        // test
        if (this.authservice.isUserLogged()) {
            return true;
        }
        // else
        // store the attempted URL for redirecting
        this.authservice.redirectUrl = url;
        // redirect to signin page
        this.router.navigate(['/signin']);
        return false;
    };
    AuthGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AuthserviceService,
            Router])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map