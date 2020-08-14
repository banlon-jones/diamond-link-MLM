import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { utilitiesUrls } from '../app-http/backendUrlStrings';
var CurrencyService = /** @class */ (function () {
    function CurrencyService(http) {
        var _this = this;
        this.http = http;
        this.currencyObj = { base: { symbol: 'PCH', name: 'PayCash', rate: 1 } };
        this.exCurrency = this.currencyObj.base;
        // this.products = this.productService.getAllProducts();
        this.getCurrencies().subscribe(function (response) {
            console.log(response);
            _this.currencyObj = response;
            _this.exCurrency = _this.currencyObj.base;
        }, function (error) {
            console.log(error);
        });
    }
    CurrencyService.prototype.getExchangeCurrency = function (exchangeCurrency) {
        if (exchangeCurrency === undefined) {
            return this.currencyObj.base;
        }
        var exStr = '{' + exchangeCurrency + '}';
        console.log(exStr);
        var exObj = JSON.parse(exStr);
        console.log(exObj);
        return exObj;
    };
    CurrencyService.prototype.getCurrencies = function () {
        return this.http.get(utilitiesUrls.CURRENCIES);
    };
    CurrencyService.prototype.getCurrencyObj = function () {
        return this.currencyObj;
    };
    CurrencyService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CurrencyService);
    return CurrencyService;
}());
export { CurrencyService };
//# sourceMappingURL=currency.service.js.map