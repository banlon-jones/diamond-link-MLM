import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from "../cart/cart.service";
import { ProductsService } from '../manage-products/products.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productService, cartService) {
        this.productService = productService;
        this.cartService = cartService;
        this.pageNumber = 0;
        this.currencyObj = { base: { symbol: 'PCH', name: 'PayCash', rate: 1 } };
        this.exCurrency = this.currencyObj.base;
        this.loading = true;
        this.cdialog = false;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.searchForm = new FormGroup({
            searchWord: new FormControl('', Validators.required)
        });
    };
    ProductsComponent.prototype.searchProduct = function () {
        var _this = this;
        this.productService.searchProduct(this.searchForm.value.searchWord).subscribe(function (data) {
            _this.results = data;
        });
    };
    ProductsComponent.prototype.getProducts = function () {
        // this.products = this.productService.getAllProducts();
        var _this = this;
        this.productService.getAllProducts(this.pageNumber).subscribe(function (response) {
            _this.products = response.data;
            _this.loading = false;
            console.log(_this.products);
        });
    };
    // pagination //
    ProductsComponent.prototype.nextPage = function () {
        this.pageNumber++;
        this.getProducts();
    };
    ProductsComponent.prototype.previousPage = function () {
        if (this.pageNumber < 0) {
            this.pageNumber = 0;
        }
        this.pageNumber--; // decreasement pagenumber
        this.getProducts();
    };
    ProductsComponent.prototype.addToCart = function (id, quanlity) {
        var _this = this;
        this.cartService.addItemToCart({
            productId: id,
            quantity: quanlity,
        }).subscribe(function (response) {
            // alert(response.message);
            _this.cartService.getCartItems().subscribe(function (respon) {
                _this.cartService.updateCartCount(respon.length);
            });
            console.log(response);
        }, function (error) {
            console.log(error.message);
        });
    };
    ProductsComponent.prototype.getExchangeCurrency = function () {
        if (this.exchangeCurrency === undefined) {
            return this.currencyObj.base;
        }
        this.exCurrency = this.productService.getExchangeCurrency(this.exchangeCurrency);
        return this.exCurrency;
    };
    ProductsComponent.prototype.getRatedPrice = function (price) {
        return price * this.exCurrency.rate;
    };
    ProductsComponent.prototype.showCurrencyDialog = function () {
        this.cdialog = true;
    };
    ProductsComponent.prototype.hideCurrencyDialog = function () {
        this.cdialog = false;
    };
    ProductsComponent.prototype.getCurrencyObj = function () {
        return this.productService.getCurrencyObj();
    };
    ProductsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.scss'],
            providers: [NgbModalConfig, NgbModal]
        }),
        tslib_1.__metadata("design:paramtypes", [ProductsService,
            CartService])
    ], ProductsComponent);
    return ProductsComponent;
}());
export { ProductsComponent };
//# sourceMappingURL=products.component.js.map