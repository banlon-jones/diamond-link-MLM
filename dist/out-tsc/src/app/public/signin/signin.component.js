import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthserviceService } from "../authservice.service";
import { MessageService } from 'primeng/api';
import { ErrorBagService } from '../../services/errors/error-bag.service';
import { PaymentsService } from '../../home/payments/payments.service';
var SigninComponent = /** @class */ (function () {
    function SigninComponent(formBuilder, router, route, authservice, messageService, errorBag, paymentsService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.authservice = authservice;
        this.messageService = messageService;
        this.errorBag = errorBag;
        this.paymentsService = paymentsService;
        this.loginError = false;
        this.display = false;
        this.alerting = false;
        if (this.authservice.getStatus()) {
            this.router.navigate(['/dashboard']);
        }
    }
    SigninComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.signinForm = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        });
        this.route.queryParams.filter(function (params) { return params.m; }).subscribe(function (params) {
            console.log(params);
            _this.message = atob(params.m);
            _this.alerting = true;
            console.log(_this.message);
        });
    };
    // for debugging purposes remove when deploying
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authservice.setRegistrationSuccess(false);
        if (this.signinForm.invalid) {
            return;
        }
        else {
            this.authservice.signin(this.signinForm.value).subscribe(function (response) {
                // store user token
                _this.authservice.storeToken(response.accessToken);
                if (response.accessToken !== null) {
                    _this.authservice.setStatus('true');
                }
                // store refresh token
                _this.authservice.storeRefreshToken(response.refreshToken);
                // store expiresIn
                _this.authservice.storeTokenExpiresIn(_this.authservice.getExpiresInTimeMillis(response.expiresIn).toString());
                console.log('expiresIn', _this.authservice.getExpiresInTimeMillis(response.expiresIn));
                // get customer details
                _this.getCustomerDetails();
                // get payment channels
                _this.getPaymentChannels();
            }, function (httpError) {
                _this.hideDialog();
                console.log(httpError);
                _this.loginError = true;
                console.log(httpError);
                _this.toastSingle({ message: 'Oops Sorry! ' + _this.errorBag.getHttpError(httpError),
                    severity: 'error', summary: 'error' });
            });
        }
    };
    SigninComponent.prototype.getRegistrationSuccess = function () {
        return this.authservice.getRegistrationSuccess();
    };
    SigninComponent.prototype.getCustomerDetails = function () {
        var _this = this;
        this.authservice.getCustomerDetails().subscribe(function (response) {
            console.log(response);
            // store the details
            _this.authservice.storeCustomerDetails(response);
            _this.hideDialog();
            _this.userRedirectTo();
        }, function (httpError) {
            // because we will intercept when the we receive a customer not found
            // and signout so will have to hide the dialog
            // for the user to proceed with signin
            _this.hideDialog();
            _this.toastSingle({ message: 'Oops Sorry! ' + _this.errorBag.getHttpError(httpError),
                severity: 'error', summary: 'error' });
            console.log(httpError);
        });
    };
    SigninComponent.prototype.getPaymentChannels = function () {
        var _this = this;
        return this.paymentsService.getPaymentChannels().subscribe(function (response) {
            console.log(response);
            _this.paymentsService.storePaymentChannels(response);
        }, function (httpError) {
            console.log(httpError);
        });
    };
    // adds an overlay dialog with progress Spinner
    SigninComponent.prototype.showDialog = function () {
        this.display = true;
    };
    SigninComponent.prototype.hideDialog = function () {
        this.display = false;
    };
    SigninComponent.prototype.toastSingle = function (toast) {
        this.messageService.add({ severity: toast.severity, summary: 'DLC ' +
                toast.summary + ' Message', detail: toast.message });
    };
    SigninComponent.prototype.userRedirectTo = function () {
        if (JSON.parse(this.authservice.retrieveCustomerDetails()).activated) {
            this.router.navigate(['/dashboard']);
        }
        else {
            this.router.navigate(['/products']);
        }
    };
    SigninComponent = tslib_1.__decorate([
        Component({
            selector: 'app-signin',
            templateUrl: './signin.component.html',
            styleUrls: ['./signin.component.scss'],
            providers: [MessageService],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            Router,
            ActivatedRoute,
            AuthserviceService,
            MessageService,
            ErrorBagService,
            PaymentsService])
    ], SigninComponent);
    return SigninComponent;
}());
export { SigninComponent };
//# sourceMappingURL=signin.component.js.map