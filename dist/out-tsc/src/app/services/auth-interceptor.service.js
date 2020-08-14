import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthserviceService } from '../public/authservice.service';
import { BASE_URI, customerUrls, loginAndRegisterUrls } from './app-http/backendUrlStrings';
import { Router } from '@angular/router';
import { tap } from "rxjs/internal/operators";
var AuthInterceptorService = /** @class */ (function () {
    function AuthInterceptorService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthInterceptorService.prototype.getAccessToken = function () {
        // tslint:disable-next-line: max-line-length
        return this.authService.getUserToken();
    };
    AuthInterceptorService.prototype.getTokenExpiresIn = function () {
        return Number(this.authService.retrieveTokenExpiresIn());
    };
    AuthInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        // Get the auth token from the service
        var authorization = '';
        // prevent call to signout if userToken is cleared
        // from localstorage
        // if token expires in 15 minutes start refresh token timeout
        if (localStorage.getItem('tokenExpiresIn') !== null) {
            var current_millis = new Date().getTime();
            var expiresIn_15s = this.getTokenExpiresIn() - 900000;
            // refresh token
            if ((current_millis > expiresIn_15s) && !this.authService.getRefreshTokenState()) {
                console.log(current_millis > expiresIn_15s);
                this.authService.startRefreshTokenTimeout();
            }
            if (localStorage.getItem('userToken') !== null) {
                authorization = 'Bearer ' + this.getAccessToken();
            }
        }
        // console.log(authorization);
        var modifiedUrl;
        if (!req.url.includes('https://')) {
            modifiedUrl = BASE_URI + req.url;
        }
        else {
            modifiedUrl = req.url;
        }
        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        var authReq = req.clone({
            headers: req.headers.set('Authorization', authorization),
            url: modifiedUrl
        });
        // send cloned request with header to the next handler.
        return next.handle(authReq).pipe(tap(function (evt) {
        }, function (e) {
            if (e instanceof HttpErrorResponse) {
                if (e.status > 400) {
                    if (req.url.includes(loginAndRegisterUrls.TOKEN_REFRESH)) {
                        console.log('Refresh token expired');
                        _this.authService.signOut();
                    }
                }
                if (req.url.includes(customerUrls._AUTH_CUSTOMER) && e.status > 403) {
                    console.log('Customer Details Intercepted');
                    _this.authService.signOut();
                }
            }
        }));
    };
    AuthInterceptorService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AuthserviceService, Router])
    ], AuthInterceptorService);
    return AuthInterceptorService;
}());
export { AuthInterceptorService };
//# sourceMappingURL=auth-interceptor.service.js.map