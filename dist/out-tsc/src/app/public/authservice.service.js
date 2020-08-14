import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { loginAndRegisterUrls, customerUrls, utilitiesUrls } from '../services/app-http/backendUrlStrings';
import { Router } from '@angular/router';
var AuthserviceService = /** @class */ (function () {
    // test values
    function AuthserviceService(http, router) {
        this.http = http;
        this.router = router;
        // successful registration
        this.registrationSuccess = false;
        this.refreshTokenState = false;
        this.detailsRefreshed = false;
    }
    // get a list of countries
    AuthserviceService.prototype.listOfCountries = function () {
        return this.http.get(utilitiesUrls.COUNTRIES);
    };
    AuthserviceService.prototype.getPackageList = function () {
        return this.http.get(utilitiesUrls.PACKAGES);
    };
    // sign in
    AuthserviceService.prototype.signin = function (credentials) {
        //
        return this.http.post(loginAndRegisterUrls.LOGIN, credentials);
    };
    AuthserviceService.prototype.upLoadProfilePic = function (profilePic) {
        return this.http.post(customerUrls._PROFILE_UPLOAD, profilePic);
    };
    AuthserviceService.prototype.setResetPassword = function (passwordObj) {
        return this.http.post(loginAndRegisterUrls.SET_RESET_PASSWORD, passwordObj);
    };
    AuthserviceService.prototype.sendResetPasswordCode = function (email) {
        return this.http.post(loginAndRegisterUrls.RESET_PASSWORD, email);
    };
    AuthserviceService.prototype.setStatus = function (status) {
        localStorage.setItem('userAuthenticated', status);
    };
    AuthserviceService.prototype.getStatus = function () {
        return localStorage.getItem('userAuthenticated') === 'true';
    };
    AuthserviceService.prototype.setRegistrationSuccess = function (success) {
        this.registrationSuccess = success;
    };
    AuthserviceService.prototype.getRegistrationSuccess = function () {
        return this.registrationSuccess;
    };
    AuthserviceService.prototype.register = function (user_details) {
        return this.http.post(loginAndRegisterUrls.REGISTER, user_details);
    };
    AuthserviceService.prototype.getCustomerDetails = function () {
        return this.http.get(customerUrls._AUTH_CUSTOMER);
    };
    AuthserviceService.prototype.storeToken = function (token) {
        localStorage.setItem('userToken', token);
    };
    AuthserviceService.prototype.storeRefreshToken = function (token) {
        localStorage.setItem('refreshToken', token);
    };
    AuthserviceService.prototype.storeTokenExpiresIn = function (expiresIn) {
        localStorage.setItem('tokenExpiresIn', expiresIn);
    };
    AuthserviceService.prototype.getUserToken = function () {
        console.log('Accessing user token');
        return this.retrieveFromLocalStorage('userToken');
    };
    AuthserviceService.prototype.storeCustomerDetails = function (details) {
        localStorage.setItem('customerDetails', JSON.stringify(details));
    };
    AuthserviceService.prototype.retrieveCustomerDetails = function () {
        return this.retrieveFromLocalStorage('customerDetails');
    };
    AuthserviceService.prototype.retrieveTokenExpiresIn = function () {
        return this.retrieveFromLocalStorage('tokenExpiresIn');
    };
    AuthserviceService.prototype.refreshToken = function () {
        var _this = this;
        this.http.post(loginAndRegisterUrls.TOKEN_REFRESH, { refreshToken: this.getRefreshToken() }).subscribe(function (token) {
            console.log('System: refreshing token');
            _this.storeToken(token.accessToken);
            _this.storeRefreshToken(token.refreshToken);
            _this.storeTokenExpiresIn(_this.getExpiresInTimeMillis(token.expiresIn).toString());
            _this.refreshCustomerDetails();
            setTimeout(function () { return _this.refreshTokenState = false; }, 100);
        }, function (error) {
            console.log(error);
            _this.refreshTokenState = false;
        });
    };
    AuthserviceService.prototype.getRefreshToken = function () {
        return localStorage.getItem('refreshToken');
    };
    AuthserviceService.prototype.isUserLogged = function () {
        return !!this.getUserToken();
    };
    AuthserviceService.prototype.refreshCustomerDetails = function () {
        var _this = this;
        this.getCustomerDetails().subscribe(function (response) {
            _this.storeCustomerDetails(response);
            console.log('CustomerDetails: refreshed!');
            _this.setDetailsState(true);
        }, function (httpError) {
            console.log(httpError);
        });
    };
    AuthserviceService.prototype.retrieveFromLocalStorage = function (key) {
        var value = localStorage.getItem(key.toString());
        if (value === null) {
            // if value is undefined it is possible that user has cleared localstorage
            // therefore user should be signed out and requested to signin again
            // if not the system my not work. the results may be unexpected
            console.log('Local Storage: ' + key);
            console.log('Signing out');
            this.signOut();
        }
        return value;
    };
    AuthserviceService.prototype.getExpiresInTimeMillis = function (expiresInSeconds) {
        var current_millis = new Date().getTime();
        return current_millis + (expiresInSeconds * 1000);
    };
    AuthserviceService.prototype.getRefreshTokenState = function () {
        return this.refreshTokenState;
    };
    AuthserviceService.prototype.getDetialsState = function () {
        return this.detailsRefreshed;
    };
    AuthserviceService.prototype.setDetailsState = function (state) {
        this.detailsRefreshed = state;
    };
    AuthserviceService.prototype.startRefreshTokenTimeout = function () {
        var _this = this;
        this.refreshTokenState = true;
        setTimeout(function () { return _this.refreshToken(); }, 5);
    };
    // signout
    AuthserviceService.prototype.signOut = function () {
        // clearInterval(this.timerId);
        localStorage.removeItem('userToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userAuthenticated');
        localStorage.removeItem('customerDetails');
        localStorage.removeItem('paymentChannels');
        localStorage.removeItem('tokenExpiresIn');
        this.router.navigate(['/signin']);
    };
    AuthserviceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, Router])
    ], AuthserviceService);
    return AuthserviceService;
}());
export { AuthserviceService };
//# sourceMappingURL=authservice.service.js.map