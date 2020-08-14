import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthserviceService } from "../authservice.service";
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorBagService } from '../../services/errors/error-bag.service';
import { ToastrService } from '../../services/toastr/toastr.service';
import { ProductsService } from '../../home/manage-products/products.service';
import { RegCartServiceService } from './reg-cart-service.service';
var SignupComponent = /** @class */ (function () {
    function SignupComponent(authservice, route, router, messageService, errorBag, productService, cartService, toastrService) {
        this.authservice = authservice;
        this.route = route;
        this.router = router;
        this.messageService = messageService;
        this.errorBag = errorBag;
        this.productService = productService;
        this.cartService = cartService;
        this.toastrService = toastrService;
        this.display = false;
        this.atProduct = false;
        this.loading = true;
        this.currencyObj = { base: { symbol: 'PCH', name: 'PayCash', rate: 1 } };
        this.exCurrency = this.currencyObj.base;
        if (this.authservice.getStatus()) {
            this.route.navigate(['/dashboard']);
        }
    }
    SignupComponent.prototype.ngOnInit = function () {
        var registrationCode;
        // get signup parameter
        this.router.params.subscribe(function (params) {
            registrationCode = params['registration_code'];
        });
        // signup form
        this.signupForm = new FormGroup({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            countryId: new FormControl('', Validators.required),
            gender: new FormControl(''),
            email: new FormControl('', [Validators.email, Validators.required]),
        });
        this.profileForm = new FormGroup({
            username: new FormControl('', Validators.required),
            packageId: new FormControl(''),
            upLineRegistrationCode: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            passwordConfirm: new FormControl('', Validators.required)
        });
        this.productForm = new FormGroup({});
        this.getCountries();
        this.getPackages();
        this.getProducts();
    };
    SignupComponent.prototype.getCountries = function () {
        var _this = this;
        this.authservice.listOfCountries().subscribe(function (data) {
            _this.countries = data;
            _this.loading = false;
        }, function (error) { return console.log(error); });
    };
    SignupComponent.prototype.getPackages = function () {
        var _this = this;
        this.authservice.getPackageList().subscribe(function (data1) {
            _this.packages = data1;
        }, function (error2) { return console.log(error2); });
    };
    SignupComponent.prototype.getProducts = function () {
        var _this = this;
        // this.products = this.productService.getAllProducts();
        this.currencyObj = this.productService.getCurrencyObj();
        this.exCurrency = this.currencyObj.base;
        this.productService.getAllProducts().subscribe(function (response) {
            _this.products = response.data;
            _this.loading = false;
            console.log(_this.products);
        });
    };
    SignupComponent.prototype.getExchangeCurrency = function () {
        this.exCurrency = this.productService.getExchangeCurrency(this.exchangeCurrency);
        return this.exCurrency;
    };
    SignupComponent.prototype.getRatedPrice = function (price) {
        return price * this.exCurrency.rate;
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        var personal_info = this.signupForm.value;
        var profile_info = this.profileForm.value;
        var cart_info = this.cartService.getRegistrationCartDTO();
        var user_details = Object.assign(personal_info, profile_info, { cart: cart_info });
        console.log(user_details);
        this.authservice.register(user_details).subscribe(function (response) {
            var message = btoa('Registration Successful! Please Check you email inbox for account activation. Thanks for using our Service.');
            console.log(response);
            _this.hideDialog();
            _this.authservice.setRegistrationSuccess(true);
            _this.route.navigate(['/signin'], { queryParams: { m: message } });
        }, function (httpError) {
            console.log(httpError);
            _this.hideDialog();
            _this.toastSingle({ message: 'Oops Sorry! ' + _this.errorBag.getHttpError(httpError), severity: 'error', summary: 'error' });
        });
    };
    // adds an overlay dialog with progress Spinner
    SignupComponent.prototype.showDialog = function () {
        this.display = true;
    };
    SignupComponent.prototype.hideDialog = function () {
        this.display = false;
    };
    SignupComponent.prototype.showCurrencyDialog = function () {
        this.atProduct = true;
    };
    SignupComponent.prototype.hideCurrencyDialog = function () {
        this.atProduct = false;
    };
    SignupComponent.prototype.toastSingle = function (toast) {
        this.messageService.add({ severity: toast.severity, summary: 'DLC ' +
                toast.summary + ' Message', detail: toast.message });
    };
    SignupComponent.prototype.getRegistrationCartItems = function () {
        return this.cartService.getRegistrationCartItems();
    };
    SignupComponent.prototype.addToRegistrationCart = function (product, quantity) {
        if (product.stock === 0) {
            this.toastSingle({ message: 'Oops Sorry! ' + product.name + ' is out of stock.', severity: 'error', summary: 'error' });
        }
        else if (quantity > product.stock) {
            this.toastSingle({ message: 'Oops Sorry! ' + product.name + ' has only ' +
                    product.stock + ' ' + product.measurementUnit.name, severity: 'error', summary: 'error' });
        }
        else {
            this.cartService.addToRegistrationCart(product, quantity);
        }
    };
    SignupComponent.prototype.clearRegistrationCart = function () {
        this.cartService.clearRegistrationCart();
    };
    SignupComponent.prototype.updateCartItem = function (product, quantity) {
        this.cartService.updateCartItem(product, quantity);
    };
    SignupComponent.prototype.getCartTotal = function () {
        var total = 0.0;
        for (var _i = 0, _a = this.cartService.getRegistrationCartItems(); _i < _a.length; _i++) {
            var cartItem = _a[_i];
            total += this.getRatedPrice(cartItem.product.price) * cartItem.quantity;
        }
        return total;
    };
    SignupComponent.prototype.restoreCart = function () {
        this.cartService.restoreCart();
    };
    SignupComponent.prototype.getCurrencyObj = function () {
        return this.productService.getCurrencyObj();
    };
    SignupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.scss'],
            providers: [MessageService],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthserviceService,
            Router,
            ActivatedRoute,
            MessageService,
            ErrorBagService,
            ProductsService,
            RegCartServiceService,
            ToastrService])
    ], SignupComponent);
    return SignupComponent;
}());
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map