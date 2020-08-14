import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { MessageService } from 'primeng/api';
import { ErrorBagService } from '../../services/errors/error-bag.service';
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(auth, errorBag, messageService) {
        this.auth = auth;
        this.errorBag = errorBag;
        this.messageService = messageService;
        this.display = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.emailSent = false;
        this.forgotPasswordForm = new FormGroup({
            email: new FormControl('', [Validators.email, Validators.required])
        });
    };
    ForgotPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.showDialog();
        this.auth.sendResetPasswordCode(this.forgotPasswordForm.value).subscribe(function (response) {
            console.log(response);
            _this.message = 'Email Sent successfully! Please Check your inbox';
            _this.emailSent = true;
            _this.hideDialog();
            _this.refreshForm();
        }, function (httpError) {
            console.log(httpError);
            _this.hideDialog();
            _this.toastSingle({ message: 'Oops Sorry! ' + _this.errorBag.getHttpError(httpError), severity: 'error', summary: 'error' });
        });
    };
    ForgotPasswordComponent.prototype.showDialog = function () {
        this.display = true;
    };
    ForgotPasswordComponent.prototype.hideDialog = function () {
        this.display = false;
    };
    ForgotPasswordComponent.prototype.toastSingle = function (toast) {
        this.messageService.add({ severity: toast.severity, summary: 'DLC ' +
                toast.summary + ' Message', detail: toast.message });
    };
    ForgotPasswordComponent.prototype.refreshForm = function () {
        this.forgotPasswordForm = new FormGroup({
            email: new FormControl('')
        });
    };
    ForgotPasswordComponent.prototype.clearToast = function () {
        this.messageService.clear();
    };
    ForgotPasswordComponent = tslib_1.__decorate([
        Component({
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.component.html',
            styleUrls: ['./forgot-password.component.scss'],
            providers: [MessageService]
        }),
        tslib_1.__metadata("design:paramtypes", [AuthserviceService, ErrorBagService,
            MessageService])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
export { ForgotPasswordComponent };
//# sourceMappingURL=forgot-password.component.js.map