import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../../../public/authservice.service';
import { CustomerService } from '../../services/customer.service';
import { MessageService } from 'primeng/api';
import { ErrorBagService } from '../../../services/errors/error-bag.service';
var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(authservice, customerService, messageService, errorBag) {
        this.authservice = authservice;
        this.customerService = customerService;
        this.messageService = messageService;
        this.errorBag = errorBag;
        this.loading = false;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.changePasswordForm = new FormGroup({
            oldPassword: new FormControl('', Validators.required),
            newPassword: new FormControl('', Validators.required),
            newPasswordConfirm: new FormControl('', Validators.required),
        });
    };
    ChangePasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var passwordObj = this.changePasswordForm.value;
        this.customerService.changePassword(passwordObj).subscribe(function (response) {
            console.log(response);
            _this.loading = false;
            _this.toastSingle({ message: 'Password changed successfully. Thank you!',
                severity: 'success', summary: 'success' });
            _this.refreshForm();
        }, function (httpError) {
            console.log(httpError);
            _this.loading = false;
            _this.toastSingle({ message: 'Oops Sorry! ' + _this.errorBag.getHttpError(httpError),
                severity: 'error', summary: 'error' });
        });
    };
    ChangePasswordComponent.prototype.toastSingle = function (toast) {
        this.messageService.add({ severity: toast.severity, summary: 'DLC ' +
                toast.summary + ' Message', detail: toast.message });
    };
    ChangePasswordComponent.prototype.refreshForm = function () {
        this.changePasswordForm = new FormGroup({
            oldPassword: new FormControl('', Validators.required),
            newPassword: new FormControl('', Validators.required),
            newPasswordConfirm: new FormControl('', Validators.required),
        });
    };
    ChangePasswordComponent = tslib_1.__decorate([
        Component({
            selector: 'app-change-password',
            templateUrl: './change-password.component.html',
            styleUrls: ['./change-password.component.scss'],
            providers: [MessageService]
        }),
        tslib_1.__metadata("design:paramtypes", [AuthserviceService, CustomerService,
            MessageService, ErrorBagService])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());
export { ChangePasswordComponent };
//# sourceMappingURL=change-password.component.js.map