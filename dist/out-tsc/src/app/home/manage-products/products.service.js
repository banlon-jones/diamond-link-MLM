import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { productUrl } from "../../services/app-http/backendUrlStrings";
import { PaymentsService } from '../payments/payments.service';
import { CurrencyService } from "../../services/currencies/currency.service";
var ProductsService = /** @class */ (function () {
    function ProductsService(http, payments, currencyService) {
        this.http = http;
        this.payments = payments;
        this.currencyService = currencyService;
    }
    ProductsService.prototype.getAllProducts = function (pageNumber) {
        if (pageNumber === void 0) { pageNumber = 0; }
        return this.http.get('https://mungwincore-customer.herokuapp.com/api/public/business/product/list?page=' + pageNumber + '&size=20').map(function (response) {
            var products = response;
            return products;
        });
    };
    ProductsService.prototype.addProduct = function (product) {
        return this.http.post(productUrl.CREATE_PRODUCT, product);
    };
    ProductsService.prototype.updateProduct = function (product) {
        return this.http.post('/api/protected/business/product/' + product.id + '/update', product);
    };
    ProductsService.prototype.getAvailableCurrencies = function () {
        return this.currencyService.getCurrencyObj();
    };
    ProductsService.prototype.getCurrencyObj = function () {
        return this.currencyService.getCurrencyObj();
        // return this.payments.getCurrencies();
    };
    ProductsService.prototype.uploadProductImage = function (formData, id) {
        return this.http.post('/api/protected/business/product/' + id + '/uploadImage', formData);
    };
    ProductsService.prototype.getExchangeCurrency = function (exchangeCurrencyStr) {
        return this.currencyService.getExchangeCurrency(exchangeCurrencyStr);
    };
    ProductsService.prototype.getProduct = function (productId) {
        return this.http.get('/api/protected/business/product/' + productId + '/info').map(function (response) {
            var product = response.data;
            return product;
        });
    };
    ProductsService.prototype.searchProduct = function (searchWord) {
        return this.http.get('https://mungwincore-customer.herokuapp.com/api/public/business/product/search?filter=' + searchWord + '&page=0&size=20').map(function (response) {
            var products = response.data;
            return products;
        });
    };
    ProductsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            PaymentsService,
            CurrencyService])
    ], ProductsService);
    return ProductsService;
}());
export { ProductsService };
//# sourceMappingURL=products.service.js.map