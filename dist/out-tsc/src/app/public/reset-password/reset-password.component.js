import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import 'rxjs/add/operator/filter';
import { MessageService } from 'primeng/api';
import { ErrorBagService } from '../../services/errors/error-bag.service';
var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(route, auth, errorBag, router, messageService) {
        this.route = route;
        this.auth = auth;
        this.errorBag = errorBag;
        this.router = router;
        this.messageService = messageService;
        this.display = false;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.passwordResetForm = new FormGroup({
            password: new FormControl('', Validators.required),
            passwordConfirm: new FormControl('', Validators.required),
        });
        this.route.queryParams.filter(function (params) { return params.ref; }).subscribe(function (params) {
            console.log(params);
            _this.code = params.ref;
        });
    };
    ResetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.passwordResetForm.invalid) {
            return;
        }
        else {
            this.resetPassword = {
                resetCode: this.code,
                password: this.passwordResetForm.get('password').value,
                confirmPassword: this.passwordResetForm.get('passwordConfirm').value
            };
            this.auth.setResetPassword(this.resetPassword).subscribe(function (response) {
                var message = btoa('Password Reset Successful. Thanks for using our Services!');
                console.log(response);
                _this.hideDialog();
                _this.router.navigate(['/signin'], { queryParams: { m: message } });
            }, function (httpError) {
                console.log(httpError);
                _this.hideDialog();
                _this.toastSingle({ message: 'Oops Sorry! ' + _this.errorBag.getHttpError(httpError), severity: 'error', summary: 'error' });
            });
        }
    };
    ResetPasswordComponent.prototype.showDialog = function () {
        this.display = true;
    };
    ResetPasswordComponent.prototype.hideDialog = function () {
        this.display = false;
    };
    ResetPasswordComponent.prototype.toastSingle = function (toast) {
        this.messageService.add({ severity: toast.severity, summary: 'DLC ' +
                toast.summary + ' Message', detail: toast.message });
    };
    ResetPasswordComponent = tslib_1.__decorate([
        Component({
            selector: 'app-reset-password',
            templateUrl: './reset-password.component.html',
            styleUrls: ['./reset-password.component.scss'],
            providers: [MessageService],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            AuthserviceService, ErrorBagService,
            Router, MessageService])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
export { ResetPasswordComponent };
//# sourceMappingURL=reset-password.component.js.map